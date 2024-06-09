import os
from PIL import Image
from textractor import Textractor
from textractor.visualizers.entitylist import EntityList
from textractor.data.constants import TextractFeatures
import boto3


from pdf2image import convert_from_path

def convert_pdf_to_images(pdf_path):
    """
    Convert each page of a PDF file to separate image files.
    
    Args:
    pdf_path (str): The path to the PDF file to convert.

    Returns:
    list: A list of images of each page of the PDF.
    """
    # Convert PDF to a list of images (one per page)
    images = convert_from_path(pdf_path)

    # Optionally, save images to files
    for i, image in enumerate(images):
        image_path = f"page_{i + 1}.png"
        image.save(image_path, 'PNG')
        print(f"Saved {image_path}")
        break

    return images

# # Usage example
# pdf_file_path = 'example.pdf'
# images = convert_pdf_to_images(pdf_file_path)


def analyze_pdf_from_s3(bucket_name, document_name):
    # Initialize the boto3 client for Textract
    textract = boto3.client('textract')

    # Call Textract to process the PDF stored in S3
    response = textract.analyze_document(
        Document={'S3Object': {'Bucket': bucket_name, 'Name': document_name}},
        FeatureTypes=['FORMS', 'TABLES']  # You can include 'TABLES' if table data is also needed
    )

    # Array to hold the extracted text entries
    text_entries = []

    # Process the response blocks
    for item in response['Blocks']:
        if item['BlockType'] == 'LINE':
            # Determine if it's a heading based on your criteria (e.g., font size or style not provided by Textract directly)
            # This is a simple heuristic assuming that if the text is all in caps, it might be a heading
            text_type = 'heading' if item['Text'].isupper() else 'text'
            text_entries.append({'type': text_type, 'value': item['Text']})

    return text_entries


def analyze_local_pdf(file_path):
    extractor = Textractor(region_name="us-east-2")
    # images = convert_pdf_to_images(file_path)
    document = extractor.analyze_document(
        file_source=file_path,
        features=[TextractFeatures.LAYOUT],
        save_image=True
    )
    return document
# Example usage
bucket_name = 'your-bucket-name'
document_name = 'path/to/your/document.pdf'

# from llama_parse import LlamaParse  # pip install llama-parse
def llama_parse_pdf(file_path):
    parser = LlamaParse(
        api_key="test",  # can also be set in your env as LLAMA_CLOUD_API_KEY
        result_type="markdown"  # "markdown" and "text" are available
    )

    # sync
    documents = parser.load_data(file_path)
    return documents

from unstructured.partition.pdf import partition_pdf
from unstructured.staging.base import elements_to_json, convert_to_dict

def tesseract_parse(file_path):
    elements = partition_pdf(filename=file_path, strategy="hi_res")


    filename = "outputs-tigard.json"
    elements_to_json(elements, filename=filename)
    return


import json
    
def filter_header_elements(file_path):
    key_to_filter = 'type'
    value_to_filter = 'Header'
    
    # Open the JSON file and load data
    with open(file_path, 'r') as file:
        data = json.load(file)
        
    # Filter data using list comprehension
    filtered_data = [item for item in data if item.get(key_to_filter) != value_to_filter]
    filtered_data = [item for item in data if 'Downloaded from' not in item['text']]
    
    key_path = ['metadata']

    for d in filtered_data:
        # Navigate to the nested dictionary
        current_dict = d
        for key in key_path[:-1]:  # Navigate to the last dictionary containing the target key
            if key in current_dict:
                current_dict = current_dict[key]
            else:
                break  # Break if any key in the path does not exist
        else:  # The else clause executes if the for loop was not broken, meaning the path is correct
            # Remove the target key
            current_dict.pop(key_path[-1], None)  # Using pop with None as default to avoid KeyError


    # Write the filtered data back to the same JSON file
    with open(file_path, 'w') as file:
        json.dump(filtered_data, file, indent=4)

# results = analyze_local_pdf('./parsons-ks.pdf')
# results = analyze_local_pdf('./page_448.png')
# results = llama_parse_pdf('./testpdf.pdf')
results = tesseract_parse('./tigard-or.pdf')

# results = analyze_pdf_from_s3(bucket_name, document_name)
# print(results)

# filter_header_elements('./outputs-albany.json')
# filter_header_elements('./outputs-parsons.json')
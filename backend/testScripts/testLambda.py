import boto3
import pdfplumber
from pymongo import MongoClient
from urllib.parse import unquote_plus

s3_client = boto3.client('s3')

def lambda_handler(event, context):
    # Get bucket name and file key from the S3 event
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    file_key = unquote_plus(event['Records'][0]['s3']['object']['key'])
    
    # Temporary file path for downloading the PDF
    tmp_file_path = f"/tmp/{file_key}"
    
    # Download the PDF file from S3
    s3_client.download_file(bucket_name, file_key, tmp_file_path)
    
    # Parse the PDF file
    text_content = ''
    with pdfplumber.open(tmp_file_path) as pdf:
        for page in pdf.pages:
            text_content += page.extract_text() + '\n'
    
    # Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
    mongo_client = MongoClient('your_mongodb_uri')
    db = mongo_client.your_database_name  # Replace 'your_database_name' with your actual database name
    docs_collection = db.docs
    
    # Insert the parsed text into the MongoDB collection
    docs_collection.insert_one({
        'file_name': file_key,
        'content': text_content
    })
    
    return {
        'statusCode': 200,
        'body': 'PDF processed and stored in MongoDB successfully.'
    }

from fastapi import APIRouter, Body, Depends, HTTPException, status
from fastapi import File, UploadFile
from fastapi.responses import JSONResponse
from deps import s3_auth
from botocore.client import BaseClient
from database.database import *
from models.codedoc import CodeDoc
from schemas.codedoc import Response, UpdateCodeDocModel
from deps import s3_auth
from s3.upload import upload_file_to_bucket


router = APIRouter()


@router.get("/", response_description="CodeDocs retrieved", response_model=Response)
async def get_code_docs():
    code_docs = await retrieve_code_docs()
    return {
        "status_code": 200,
        "response_type": "success",
        "description": "Code Doc data retrieved successfully",
        "data": code_docs,
    }


@router.get("/{id}", response_description="Code Doc data retrieved", response_model=Response)
async def get_code_doc_data(id: PydanticObjectId):
    code_doc = await retrieve_code_doc(id)
    if code_doc:
        return {
            "status_code": 200,
            "response_type": "success",
            "description": "Code Doc data retrieved successfully",
            "data": code_doc,
        }
    return {
        "status_code": 404,
        "response_type": "error",
        "description": "Code Doc doesn't exist",
    }

@router.get("/ahj/{ahjId}", response_description="CodeDocs retrieved", response_model=Response)
async def get_code_docs_by_ahj(ahjId: PydanticObjectId):
    code_docs = await retrieve_code_doc_by_ahj(ahjId)
    if code_docs:
        return {
            "status_code": 200,
            "response_type": "success",
            "description": "Code Docs data retrieved successfully",
            "data": code_docs,
        }
    return {
        "status_code": 404,
        "response_type": "error",
        "description": "Code Doc doesn't exist",
    }


@router.post(
    "/",
    response_description="Code Doc data added into the database",
    response_model=Response,
)
async def add_code_doc_data(s3: BaseClient = Depends(s3_auth), file_obj: UploadFile = File(...), code_doc: CodeDoc = Body(...)):
    try:
        upload_obj = upload_file_to_bucket(s3_client=s3, file_obj=file_obj.file,
                                            bucket='fordje-docs',
                                            object_name=file_obj.filename
                                            )
    except:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                            detail="File could not be uploaded")
    print(upload_obj)
    code_doc['fileId'] = upload_obj
    new_code_doc = await add_code_doc(code_doc)
    return {
        "status_code": 200,
        "response_type": "success",
        "description": "Code Doc created successfully",
        "data": new_code_doc,
    }


@router.delete("/{id}", response_description="Code Doc data deleted from the database")
async def delete_code_doc_data(id: PydanticObjectId):
    deleted_code_doc = await delete_code_doc(id)
    if deleted_code_doc:
        return {
            "status_code": 200,
            "response_type": "success",
            "description": "Code Doc with ID: {} removed".format(id),
            "data": deleted_code_doc,
        }
    return {
        "status_code": 404,
        "response_type": "error",
        "description": "Code Doc with id {0} doesn't exist".format(id),
        "data": False,
    }


@router.patch("/{id}", response_model=Response)
async def update_code_doc(id: PydanticObjectId, req: UpdateCodeDocModel = Body(...)):
    updated_code_doc = await update_code_doc_data(id, req.dict(exclude_unset=True))
    if updated_code_doc:
        return {
            "status_code": 200,
            "response_type": "success",
            "description": "Code Doc with ID: {} updated".format(id),
            "data": updated_code_doc,
        }
    return {
        "status_code": 404,
        "response_type": "error",
        "description": "An error occurred. Student with ID: {} not found".format(id),
        "data": False,
    }

@router.get("/buckets/")
async def get_buckets(s3: BaseClient = Depends(s3_auth)):
    response = s3.list_buckets()

    return response['Buckets']


@router.post("/upload-file/", status_code=status.HTTP_201_CREATED, summary="Upload files to AWS S3 Buckets",
             description="Upload a valid file to AWS S3 bucket", name="POST files to AWS S3",
             response_description="Successfully uploaded file to S3 bucket")
def upload_file(s3: BaseClient = Depends(s3_auth), file_obj: UploadFile = File(...)):
    upload_obj = upload_file_to_bucket(s3_client=s3, file_obj=file_obj.file,
                                       bucket='fordje-docs',
                                       object_name=file_obj.filename
                                       )
    print(upload_obj)
    if upload_obj:
        return JSONResponse(content="Object has been uploaded to bucket successfully",
                            status_code=status.HTTP_201_CREATED)
    else:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                            detail="File could not be uploaded")
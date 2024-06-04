from fastapi import APIRouter, Body
from database.database import *
from models import Ahj
from schemas.ahj import Response, UpdateAhjModel


router = APIRouter()

# Add paging because this hangs in swagger
@router.get("/", response_description="AHJs retrieved", response_model=Response)
async def get_ahjs():
    ahjs = await retrieve_ahjs()
    return {
        "status_code": 200,
        "response_type": "success",
        "description": "AHJs retrieved successfully",
        "data": ahjs,
    }


@router.get("/{id}", response_description="AHJ data retrieved", response_model=Response)
async def get_ahj_data(id: PydanticObjectId):
    ahj = await retrieve_ahj(id)
    if ahj:
        return {
            "status_code": 200,
            "response_type": "success",
            "description": "AHJ data retrieved successfully",
            "data": ahj,
        }
    return {
        "status_code": 404,
        "response_type": "error",
        "description": "AHJ doesn't exist",
    }

@router.get("/state/{state_code}", response_description="AHJ data retrieved", response_model=Response)
async def get_ahj_by_state(state_code: str):
    ahj = await retrieve_ahjs_by_state(state_code)
    if ahj:
        return {
            "status_code": 200,
            "response_type": "success",
            "description": "AHJ data retrieved successfully",
            "data": ahj,
        }
    return {
        "status_code": 404,
        "response_type": "error",
        "description": "AHJ doesn't exist",
    }


@router.post(
    "/",
    response_description="AHJ data added into the database",
    response_model=Response,
)
async def add_ahj_data(ahj: Ahj = Body(...)):
    new_ahj = await add_ahj(ahj)
    return {
        "status_code": 200,
        "response_type": "success",
        "description": "AHJ created successfully",
        "data": new_ahj,
    }


@router.delete("/{id}", response_description="AHJ data deleted from the database")
async def delete_ahj_data(id: PydanticObjectId):
    deleted_ahj = await delete_ahj(id)
    if deleted_ahj:
        return {
            "status_code": 200,
            "response_type": "success",
            "description": "AHJ with ID: {} removed".format(id),
        }
    return {
        "status_code": 404,
        "response_type": "error",
        "description": "AHJ with id {0} doesn't exist".format(id),
        "data": False,
    }


@router.patch("/{id}", response_model=Response)
async def update_ahj(id: PydanticObjectId, req: UpdateAhjModel = Body(...)):
    updated_ahj = await update_ahj_data(id, req.dict(exclude_unset=True))
    if updated_ahj:
        return {
            "status_code": 200,
            "response_type": "success",
            "description": "AHJ with ID: {} updated".format(id),
            "data": updated_ahj,
        }
    return {
        "status_code": 404,
        "response_type": "error",
        "description": "An error occurred. AHJ with ID: {} not found".format(id),
        "data": False,
    }

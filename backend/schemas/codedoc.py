from pydantic import BaseModel
from typing import Optional, Any
from beanie import PydanticObjectId

class UpdateCodeDocModel(BaseModel):
    fileId: str | None = None
    ahjId: PydanticObjectId | None = None
    version: int | None = None
    vintage: int | None = None
    
    class Collection:
        name = "docs"

    class Config:
        json_schema_extra = {
            "example": {
                "fileId": "fake-uuid-here",
                "ahjId": "fake-ahjID-here",
                "version": "1",
                "vintage": "2021",
            }
        }

class Response(BaseModel):
    status_code: int
    response_type: str
    description: str | None = None
    data: Optional[Any] | None = None

    class Config:
        json_schema_extra = {
            "example": {
                "status_code": 200,
                "response_type": "success",
                "description": "Operation successful",
                "data": "Sample data",
            }
        }

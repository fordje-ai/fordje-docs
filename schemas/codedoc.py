from pydantic import BaseModel
from typing import Optional, Any

class UpdateCodeDocModel(BaseModel):
    fileId: str | None = None
    city: str | None = None
    state: str | None = None
    description: str | None = None
    vintage: int | None = None
    
    class Collection:
        name = "docs"

    class Config:
        json_schema_extra = {
            "example": {
                "fileId": "fake-uuid-here",
                "city": "Raleigh",
                "state": "NC",
                "description": "Description of the file goes here",
                "vintage": "2021",
            }
        }

class Response(BaseModel):
    status_code: int
    response_type: str
    description: str
    data: Optional[Any]

    class Config:
        json_schema_extra = {
            "example": {
                "status_code": 200,
                "response_type": "success",
                "description": "Operation successful",
                "data": "Sample data",
            }
        }

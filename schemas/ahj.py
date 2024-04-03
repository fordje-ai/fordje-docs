from pydantic import BaseModel
from typing import Optional, Any

class UpdateAhjModel(BaseModel):
    name: str | None = None
    stateCode: str | None = None
    lat: float | None = None
    lon: float | None = None
    population: int | None = None
    
    class Collection:
        name = "ahjs"

    class Config:
        json_schema_extra = {
            "example": {
                "name": "fakeName",
                "stateCode": "NC",
                "lat": "61.211571",
                "lon": "-149.876077",
                "population": "123456"
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

from typing import Optional
from pydantic import BaseModel
from fastapi.security import HTTPBasicCredentials
from pydantic import EmailStr

class AdminSignIn(HTTPBasicCredentials):
    class Config:
        json_schema_extra = {
            "example": {"username": "jon@fordje.com", "password": "Test1234!"}
        }


class AdminData(BaseModel):
    fullname: str
    email: EmailStr

    class Config:
        json_schema_extra = {
            "example": {
                "fullname": "Fordje Admin",
                "email": "jon@fordje.com",
            }
        }

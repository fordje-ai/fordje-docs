from beanie import Document
from fastapi.security import HTTPBasicCredentials
from pydantic import BaseModel, EmailStr


class Admin(Document):
    fullname: str
    email: EmailStr
    password: str

    class Config:
        json_schema_extra = {
            "example": {
                "fullname": "Fordje Admin",
                "email": "jon@fordje.com",
                "password": "Test1234!",
            }
        }

    class Settings:
        name = "admin"


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

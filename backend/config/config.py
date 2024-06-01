from typing import Optional

from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic_settings import BaseSettings
from pydantic import validator
import models as models


class Settings(BaseSettings):
    auth0_audience: str
    auth0_domain: str
    client_origin_url: str
    port: int
    reload: bool
    DATABASE_URL: Optional[str] = None
    AWS_ACCESS_KEY_ID: str
    AWS_SECRET_ACCESS_KEY: str

    @classmethod
    @validator("client_origin_url", "auth0_audience", "auth0_domain", "database_url", "port", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY")
    def check_not_empty(cls, v):
        assert v != "", f"{v} is not defined"
        return v
    

    class Config:
        env_file = ".env.dev"
        env_file_encoding = "utf-8"


async def initiate_database():
    client = AsyncIOMotorClient(Settings().DATABASE_URL)
    await init_beanie(
        database=client.get_default_database(), document_models=models.__all__
    )

settings = Settings()

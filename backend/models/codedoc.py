from beanie import Document, PydanticObjectId

class CodeDoc(Document):
    fileId: str
    ahjId: PydanticObjectId
    description: str
    vintage: int

    class Config:
        json_schema_extra = {
            "example": {
                "fileId": "Test UUID goes here",
                "ahjId": "random ahjId here",
                "version": 1,
                "vintage": 2014,
            }
        }

    class Settings:
        name = "docs"

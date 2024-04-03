from beanie import Document

class CodeDoc(Document):
    fileId: str
    city: str
    state: str
    description: str
    vintage: int

    class Config:
        json_schema_extra = {
            "example": {
                "fileId": "Test UUID goes here",
                "city": "Raleigh",
                "state": "NC",
                "description": "This is a test description of a code doc",
                "vintage": 2014,
            }
        }

    class Settings:
        name = "docs"

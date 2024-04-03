from beanie import Document

class Ahj(Document):
    name: str
    stateCode: str
    lat: float
    lon: float
    population: int | None = None

    class Config:
        json_schema_extra = {
            "example": {
                "name": "testTown",
                "stateCode": "NC",
                "lat": 61.211571,
                "lon": -149.876077,
                "population": 123456,
            }
        }

    class Settings:
        name = "ahjs"

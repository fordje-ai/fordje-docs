from beanie import Document

class Ahj(Document):
    type: str | None = None
    name: str
    county: str | None = None
    stateCode: str
    stateName: str | None = None
    lat: float | None = None
    lon: float | None = None
    population: int | None = None

    class Config:
        json_schema_extra = {
            "example": {
                "type": "CITY",
                "name": "testTown",
                "county": "County Name",
                "stateCode": "NC",
                "stateName": "North Carolina",
                "lat": 61.211571,
                "lon": -149.876077,
                "population": 123456,
            }
        }

    class Settings:
        name = "ahjs"

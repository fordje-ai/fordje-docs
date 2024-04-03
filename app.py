from fastapi import FastAPI, Depends

from auth.jwt_bearer import JWTBearer
from config.config import initiate_database
from routes.admin import router as AdminRouter
from routes.ahj import router as AhjRouter
from routes.codedoc import router as CodeDocRouter

app = FastAPI(debug=True)

token_listener = JWTBearer()


@app.on_event("startup")
async def start_database():
    await initiate_database()


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app."}


app.include_router(AdminRouter, tags=["Administrator"], prefix="/admin")
app.include_router(AhjRouter,tags=["AHJs"],prefix="/ahj",dependencies=[Depends(token_listener)],)
app.include_router(CodeDocRouter,tags=["CodeDocs"],prefix="/codedoc",dependencies=[Depends(token_listener)],)

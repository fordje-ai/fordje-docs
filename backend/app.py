import secure
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from auth.dependencies import PermissionsValidator, validate_token
from config.config import initiate_database, settings
from routes.admin import router as AdminRouter
from routes.ahj import router as AhjRouter
from routes.codedoc import router as CodeDocRouter

app = FastAPI(debug=True)

csp = secure.ContentSecurityPolicy().default_src("'self'").frame_ancestors("'none'")
hsts = secure.StrictTransportSecurity().max_age(31536000).include_subdomains()
referrer = secure.ReferrerPolicy().no_referrer()
cache_value = secure.CacheControl().no_cache().no_store().max_age(0).must_revalidate()
x_frame_options = secure.XFrameOptions().deny()

secure_headers = secure.Secure()


@app.on_event("startup")
async def start_database():
    await initiate_database()


@app.middleware("http")
async def set_secure_headers(request, call_next):
    response = await call_next(request)
    secure_headers.framework.fastapi(response)
    return response


app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.client_origin_url],
    allow_methods=["GET"],
    allow_headers=["Authorization", "Content-Type"],
    max_age=86400,
)


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    message = str(exc.detail)

    return JSONResponse({"message": message}, status_code=exc.status_code)


@app.get("/api/messages/public")
def public():
    return {"text": "This is a public message."}


@app.get("/api/messages/protected", dependencies=[Depends(validate_token)])
def protected():
    return {"text": "This is a protected message."}


@app.get(
    "/api/messages/admin",
    dependencies=[Depends(PermissionsValidator(["read:admin-messages"]))],
)
def admin():
    return {"text": "This is an admin message."}

app.include_router(AhjRouter,tags=["AHJs"],prefix="/ahj",dependencies=[Depends(validate_token)],)
app.include_router(CodeDocRouter,tags=["CodeDocs"],prefix="/codedoc",dependencies=[Depends(validate_token)],)

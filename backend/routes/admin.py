from auth.jwt_bearer import JWTBearer
from auth.jwt_handler import decode_jwt, sign_jwt
from fastapi import Body, APIRouter, Depends, HTTPException
from passlib.context import CryptContext

from database.database import add_admin
from models.admin import Admin
from schemas.admin import AdminData, AdminSignIn

token_listener = JWTBearer()
router = APIRouter()

hash_helper = CryptContext(schemes=["bcrypt"])


@router.post("/login")
async def admin_login(admin_credentials: AdminSignIn = Body(...)):
    admin_exists = await Admin.find_one(Admin.email == admin_credentials.username)
    if admin_exists:
        password = hash_helper.verify(admin_credentials.password, admin_exists.password)
        if password:
            return {
                'access_token': sign_jwt(admin_credentials.username),
                'refresh_token': sign_jwt(admin_credentials.username, 86400)
            }

        raise HTTPException(status_code=403, detail="Incorrect email or password")

    raise HTTPException(status_code=403, detail="Incorrect email or password")


@router.post("", response_model=AdminData)
async def admin_signup(admin: Admin = Body(...)):
    admin_exists = await Admin.find_one(Admin.email == admin.email)
    if admin_exists:
        raise HTTPException(
            status_code=409, detail="Admin with email supplied already exists"
        )

    admin.password = hash_helper.encrypt(admin.password)
    new_admin = await add_admin(admin)
    return new_admin

@router.get("/me", response_model=AdminData)
async def admin_info(token: str = Depends(token_listener)):
    user_info = decode_jwt(token)
    
    admin_exists = await Admin.find_one(Admin.email == user_info['user_id'])
    if not admin_exists:
        raise HTTPException(
            status_code=409, detail="Admin with email supplied already exists"
        )
    
    return admin_exists
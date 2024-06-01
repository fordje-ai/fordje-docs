from fastapi import APIRouter
from passlib.context import CryptContext

from database.database import add_admin
router = APIRouter()

hash_helper = CryptContext(schemes=["bcrypt"])


from pydantic import BaseModel, validator, EmailStr
from typing import List


class UserBase(BaseModel):
    username: str
    email: EmailStr
    is_admin = False


class SignInRequestSchema(BaseModel):
    email: EmailStr
    password: str


class UserRequestSchema(UserBase):
    password: str

    @classmethod
    @validator("password")
    def password_must_have_6_digits(cls, v):
        if len(v) < 6:
            return ValueError("Password must have at least 6 digits")
        return v


class UserResponseSchema(UserBase):
    id: int

    class Config:
        orm_mode = True

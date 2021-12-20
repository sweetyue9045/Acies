from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from router.schemas import ArticleRequestSchema, ArticleResponseSchema, UpdateResponseSchema
from db.database import get_db
from db import db_article
from typing import List

router = APIRouter(
    prefix="/api/v1/article",
    tags=["article"]
)


@router.post("", response_model=ArticleResponseSchema)
def create(request: ArticleRequestSchema, db: Session = Depends(get_db)):
    return db_article.create(db=db, request=request)


@router.get("/feed", response_model=List[ArticleResponseSchema])
def feed_initial_articles(db: Session = Depends(get_db)):
    return db_article.db_feed(db)


@router.get("/all", response_model=List[ArticleResponseSchema])
def get_all_articles(db: Session = Depends(get_db)):
    return db_article.get_all(db)


@router.get("/id/{id}", response_model=ArticleResponseSchema)
def get_article_by_id(id: int, db: Session = Depends(get_db)):
    return db_article.get_article_by_id(id=id, db=db)


@router.get("/{category}", response_model=List[ArticleResponseSchema])
def get_article_by_category(category: str, db: Session = Depends(get_db)):
    return db_article.get_article_by_category(category=category, db=db)

@router.put("/id/{user_id}/update")
def update_user(user_id: int, request: UpdateResponseSchema, db: Session = Depends(get_db)):
    return db_article.update(user_id=user_id, db=db, request=request)

@router.delete("/id/{id}/delete", response_model=ArticleResponseSchema)
def delete_user(id: int, db: Session = Depends(get_db)):
    return db_article.delete(id=id, db=db)
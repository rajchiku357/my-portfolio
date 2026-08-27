from typing import List, Optional
from pydantic import BaseModel, Field

class Project(BaseModel):
    id: str
    title: str
    description: str
    category: str
    tags: List[str]
    image: str
    live_url: Optional[str] = None
    github_url: Optional[str] = None
    featured: bool = False

class SkillCategory(BaseModel):
    category: str
    skills: List[str]

class SkillDetail(BaseModel):
    name: str
    level: int  # 1-100
    category: str
    icon: Optional[str] = None

class Experience(BaseModel):
    id: str
    role: str
    company: str
    location: str
    period: str
    description: str
    achievements: List[str]
    technologies: List[str]

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: str = Field(..., min_length=3, max_length=100)
    subject: str = Field(..., min_length=1, max_length=150)
    message: str = Field(..., min_length=1, max_length=3000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    timestamp: str

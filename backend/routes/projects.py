from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models.schemas import Project

router = APIRouter(prefix="/api/projects", tags=["projects"])

PROJECTS_DATA: List[Project] = [
    Project(
        id="1",
        title="TaskFlow - Fast, Intelligent Task Management Platform",
        description="A hotel management web application built with FastAPI and AI Quick-Add to help managers organize and manage daily tasks, operational issues, and team workflows efficiently.",
        category="Full Stack",
        tags=["ReactJs", "Node.js", "Express", "MongoDB", "FastAPI", "Python"],
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        live_url="https://github.com/oberoirithik9/taskflow",
        github_url="https://github.com/oberoirithik9/taskflow",
        featured=True
    ),
    Project(
        id="2",
        title="Wordscountr — Online Word & Character Counter",
        description="A lightweight web application that instantly counts words, characters, sentences, and paragraphs, helping users analyze and format text efficiently.",
        category="Frontend",
        tags=["JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS"],
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        live_url="https://github.com/oberoirithik9",
        github_url="https://github.com/oberoirithik9",
        featured=True
    )
]

@router.get("", response_model=List[Project])
def get_projects(category: Optional[str] = Query(None, description="Filter by category")):
    if category and category != "All":
        return [p for p in PROJECTS_DATA if p.category.lower() == category.lower()]
    return PROJECTS_DATA

@router.get("/{project_id}", response_model=Project)
def get_project_by_id(project_id: str):
    for project in PROJECTS_DATA:
        if project.id == project_id:
            return project
    raise HTTPException(status_code=404, detail="Project not found")

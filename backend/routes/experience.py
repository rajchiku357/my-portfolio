from fastapi import APIRouter
from typing import List
from models.schemas import Experience

router = APIRouter(prefix="/api/experience", tags=["experience"])

EXPERIENCE_DATA: List[Experience] = [
    Experience(
        id="exp-1",
        role="Software Development Engineering with Applied AI",
        company="Masai School",
        location="Bangaluru, India",
        period="02/2026 - 08/2026",
        description="Intensive hands-on software development program focusing on full-stack web development, data structures, algorithms, and AI integration.",
        achievements=[
            "Developed TaskFlow, an intelligent task management web application using React, Node.js, Express, and MongoDB",
            "Implemented RESTful APIs and backend services using Node.js, Express, and FastAPI",
            "Collaborated on full-stack projects focusing on backend functionality, database optimization, and application performance"
        ],
        technologies=["Python", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "Git"]
    ),
    Experience(
        id="exp-2",
        role="Bachelor of Arts, English",
        company="Vardhman Mahavir Collage",
        location="Pawapuri, Bihar",
        period="2024 - Present",
        description="Undergraduate degree developing strong analytical, communication, and critical thinking abilities.",
        achievements=[
            "Demonstrated strong problem-solving and time management abilities",
            "Engaged in technical project writing and documentation"
        ],
        technologies=["Communication", "Analysis", "Documentation"]
    ),
    Experience(
        id="exp-3",
        role="Higher Secondary Education (Science)",
        company="Bihar Board",
        location="Pawapuri, Bihar",
        period="2022 - 2024",
        description="Focus on mathematics, physics, and analytical science foundations.",
        achievements=[
            "Completed science stream coursework with analytical problem-solving focus"
        ],
        technologies=["Science", "Mathematics", "Logic"]
    )
]

@router.get("", response_model=List[Experience])
def get_experience():
    return EXPERIENCE_DATA

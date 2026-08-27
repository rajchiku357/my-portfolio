from fastapi import APIRouter
from typing import List, Dict
from models.schemas import SkillDetail

router = APIRouter(prefix="/api/skills", tags=["skills"])

SKILLS_DATA: List[SkillDetail] = [
    # Languages & Frontend
    SkillDetail(name="Python", level=92, category="Languages", icon="Code2"),
    SkillDetail(name="JavaScript (ES6+)", level=94, category="Languages", icon="FileCode"),
    SkillDetail(name="React.js", level=90, category="Frontend", icon="Layout"),
    SkillDetail(name="HTML5 & CSS3", level=95, category="Frontend", icon="Palette"),

    # Frameworks & Backend
    SkillDetail(name="Node.js", level=92, category="Backend & Frameworks", icon="Server"),
    SkillDetail(name="Express.js", level=90, category="Backend & Frameworks", icon="Cpu"),
    SkillDetail(name="FastAPI", level=88, category="Backend & Frameworks", icon="Globe"),

    # Databases & Analytics
    SkillDetail(name="MongoDB", level=88, category="Databases & Tools", icon="Database"),
    SkillDetail(name="MySQL / SQL", level=90, category="Databases & Tools", icon="HardDrive"),
    SkillDetail(name="Git & GitHub", level=92, category="Databases & Tools", icon="GitBranch"),
    SkillDetail(name="Power BI & Data Visualization", level=85, category="Databases & Tools", icon="BarChart")
]

@router.get("", response_model=List[SkillDetail])
def get_skills():
    return SKILLS_DATA

@router.get("/categorized")
def get_categorized_skills() -> Dict[str, List[Dict]]:
    categorized: Dict[str, List[Dict]] = {}
    for skill in SKILLS_DATA:
        if skill.category not in categorized:
            categorized[skill.category] = []
        categorized[skill.category].append({
            "name": skill.name,
            "level": skill.level,
            "icon": skill.icon
        })
    return categorized

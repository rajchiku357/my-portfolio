from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import projects, skills, experience, contact

app = FastAPI(
    title="Rithik Raj - Full Stack Developer API",
    description="REST API backend for Rithik Raj's Developer Portfolio.",
    version="1.0.0"
)

# Enable CORS for local and production web clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(projects.router)
app.include_router(skills.router)
app.include_router(experience.router)
app.include_router(contact.router)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "developer": "Rithik Raj",
        "role": "Full Stack Web Developer",
        "documentation": "/docs"
    }

@app.get("/api/health")
def health_check():
    return {"status": "healthy"}

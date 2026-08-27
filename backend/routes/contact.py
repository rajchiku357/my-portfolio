from fastapi import APIRouter, status
from datetime import datetime
import logging
from models.schemas import ContactRequest, ContactResponse

router = APIRouter(prefix="/api/contact", tags=["contact"])

MESSAGES_DB = []
logger = logging.getLogger("uvicorn.error")

@router.post("", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact_form(payload: ContactRequest):
    timestamp_str = datetime.utcnow().isoformat() + "Z"
    
    MESSAGES_DB.append({
        "name": payload.name,
        "email": payload.email,
        "subject": payload.subject,
        "message": payload.message,
        "timestamp": timestamp_str
    })
    
    logger.info(f"Received contact message from {payload.name} <{payload.email}>: {payload.subject}")
    
    return ContactResponse(
        success=True,
        message=f"Thank you, {payload.name}! Your message has been sent to Rithik Raj (oberoirithik9@gmail.com).",
        timestamp=timestamp_str
    )

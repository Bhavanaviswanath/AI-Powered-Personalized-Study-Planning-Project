from fastapi import APIRouter
import smtplib

router = APIRouter()

def send_email(recipient, subject, body):
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login("your_email@gmail.com", "your_password")
    message = f"Subject: {subject}\n\n{body}"
    server.sendmail("your_email@gmail.com", recipient, message)
    server.quit()

@router.post("/send-notification")
def send_study_reminder(email: str, subject: str, message: str):
    send_email(email, subject, message)
    return {"message": "Notification sent successfully"}
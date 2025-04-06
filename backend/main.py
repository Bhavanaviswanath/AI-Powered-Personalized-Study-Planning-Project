from fastapi import FastAPI
from auth import router as auth_router
from planner import router as planner_router
from rewards import router as rewards_router
from notifications import router as notifications_router

app = FastAPI()

# Include different modules
app.include_router(auth_router, prefix="/auth")
app.include_router(planner_router, prefix="/planner")
app.include_router(rewards_router, prefix="/rewards")
app.include_router(notifications_router, prefix="/notifications")

@app.get("/")
def root():
    return {"message": "Welcome to AI-Study-Planner API"}
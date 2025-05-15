from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uvicorn import run
import os
from dotenv import load_dotenv
from routes import router

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(router)

# Define port and host from environment variables
PORT = int(os.getenv("PORT", 3333))
HOST = os.getenv("HOST", "0.0.0.0")

if __name__ == "__main__":
    run("main:app", host=HOST, port=PORT, reload=True)
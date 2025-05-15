from pydantic import BaseModel

class MotivationalMessageRequest(BaseModel):
    name: str
    how_you_feel_currently: str
    main_challenges: str
    goals_dreams: str
    how_you_handle_emotions: str
    support_sources: str
    personal_care: str

class MotivationalMessageResponse(BaseModel):
    nome: str
    mensagem: str
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return{"message": "Olá mundo"}

@app.get("/teste1")
async def funcaoteste():
    return{"teste": "deu certo"}
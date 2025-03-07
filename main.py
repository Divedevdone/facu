from fastapi import FastAPI

app = FastAPI()

@app.get("/helloworld")
async def root():
    return{"message": "Olá mundo"}

@app.get("/funcaoteste")
async def funcaoteste():
    return{"teste": "deu certo"}
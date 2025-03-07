from fastapi import FastAPI
import random

app = FastAPI()

@app.get("/")
async def root():
    return{"message": "Olá mundo"}

@app.get("/teste1")
async def funcaoteste():
    return{"teste": True, "num_aleatorio": random.randint(0,1000)}
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests

app = FastAPI()

class InferenceRequest(BaseModel):
    model_name: str
    parameters: dict
    image: str = None

@app.post("/infer")
async def infer(request: InferenceRequest):
    try:
        if request.model_name not in ["model_a", "model_b", "model_c", "model_d"]:
            raise HTTPException(status_code=400, detail="Invalid model name")

        # Prepare the request to the respective model's inference endpoint
        inference_url = f"http://localhost:8000/{request.model_name}/predict"
        response = requests.post(inference_url, json={"parameters": request.parameters, "image": request.image})

        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.json())

        return response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
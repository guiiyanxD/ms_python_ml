from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
import uvicorn
import requests

app = FastAPI()

@app.post("/infer/model-a")
async def infer_model_a(parameters: dict):
    response = requests.post("http://python-inference-service/infer/model-a", json=parameters)
    return JSONResponse(content=response.json())

@app.post("/infer/model-b")
async def infer_model_b(parameters: dict):
    response = requests.post("http://python-inference-service/infer/model-b", json=parameters)
    return JSONResponse(content=response.json())

@app.post("/infer/model-c")
async def infer_model_c(parameters: dict):
    response = requests.post("http://python-inference-service/infer/model-c", json=parameters)
    return JSONResponse(content=response.json())

@app.post("/infer/model-d-image")
async def infer_model_d_image(file: UploadFile = File(...)):
    file_content = await file.read()
    response = requests.post("http://python-inference-service/infer/model-d", files={"file": file_content})
    return JSONResponse(content=response.json())

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
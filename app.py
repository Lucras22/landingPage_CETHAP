from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path

app = FastAPI()

# Serve a pasta 'static' (onde ficarão CSS, JS, imagens etc.)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve a pasta 'templates' (onde estará o index.html)
@app.api_route("/", methods=["GET", "HEAD"], response_class=HTMLResponse)
async def serve_home():
    html_path = Path("templates/index.html")
    return HTMLResponse(content=html_path.read_text(encoding="utf-8"))

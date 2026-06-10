from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    id: int
    name: str
    description: str | None = None

items = []

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI assignment"}

@app.get("/items")
def get_items():
    return {"items": items}

@app.post("/items")
def create_item(item: Item):
    items.append(item.dict())
    return {"message": "Item created", "item": item}

@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    global items
    items = [item for item in items if item["id"] != item_id]
    return {"message": "Item deleted", "item_id": item_id}

# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Learn how to build a REST API with FastAPI by creating routes, handling requests, validating input, and returning JSON responses.

## 📝 Tasks

### 🛠️ Project Setup and Routing

#### Description
Initialize a FastAPI application and create basic routes for the API.

#### Requirements
Completed project should:

- Install and import FastAPI and Uvicorn
- Create a FastAPI application instance
- Define at least two routes using `@app.get()` and `@app.post()`
- Return JSON responses from each route

### 🛠️ Request Validation and Data Models

#### Description
Use Pydantic models to validate incoming request data and ensure robust API inputs.

#### Requirements
Completed project should:

- Define a Pydantic model for request payloads
- Use the model in a POST route to validate incoming JSON data
- Return a response that includes the validated request data
- Return a clear error response for invalid requests

### 🛠️ CRUD Endpoint Behavior

#### Description
Implement basic Create, Read, and Delete operations for a simple in-memory resource collection.

#### Requirements
Completed project should:

- Store items in a list or dictionary in memory
- Provide endpoints to create a new item, read all items, and delete an item by ID
- Use proper HTTP methods and status codes
- Return JSON responses for all CRUD operations

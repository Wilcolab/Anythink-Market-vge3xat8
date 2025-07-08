# Anythink Market - Task Management API

This project demonstrates a migration from Python FastAPI to Node.js Express, showcasing both implementations running side by side. The application provides task management functionality with identical API endpoints implemented in both technologies.

## 🚀 Architecture Overview

The project now supports **dual server architecture**:
- **Python FastAPI Server** (Original) - Port 8000
- **Node.js Express Server** (Migrated) - Port 8001

Both servers provide identical functionality and can run simultaneously for comparison and migration purposes.

## 📁 Project Structure

```
├── python-server/           # Original Python FastAPI implementation
│   ├── src/
│   │   ├── main.py         # FastAPI server with task endpoints
│   │   └── __init__.py     # Python package marker
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile         # Python server containerization
├── node-server/            # New Node.js Express implementation
│   ├── server.js          # Express server with migrated endpoints
│   ├── package.json       # Node.js dependencies and scripts
│   └── Dockerfile         # Node.js server containerization
└── docker-compose.yml     # Multi-container orchestration for both servers
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Docker and Docker Compose installed
- Git for version control

### Running Both Servers

1. **Clone and navigate to the project:**
   ```bash
   git clone <repository-url>
   cd Anythink-Market-vge3xat8
   ```

2. **Build and start both servers:**
   ```bash
   docker compose up --build
   ```

3. **Access the servers:**
   - **Python Server**: http://localhost:8000
   - **Node.js Server**: http://localhost:8001

### Running Individual Servers

**Python Server Only:**
```bash
docker compose up python-server
```

**Node.js Server Only:**
```bash
docker compose up node-server
```

## 🛠 API Endpoints

Both servers provide identical API functionality:

### Base Endpoints
- **Python**: `GET http://localhost:8000/` - Returns "Hello World"
- **Node.js**: `GET http://localhost:8001/` - Returns server status message

### Task Management

#### Get All Tasks
- **Endpoint**: `GET /tasks`
- **Python**: `http://localhost:8000/tasks`
- **Node.js**: `http://localhost:8001/tasks`
- **Response**: 
  ```json
  {
    "tasks": [
      "Write a diary entry from the future",
      "Create a time machine from a cardboard box",
      "Plan a trip to the dinosaurs",
      "Draw a futuristic city",
      "List items to bring on a time-travel adventure"
    ]
  }
  ```

#### Add New Task
- **Endpoint**: `POST /tasks`
- **Python**: `http://localhost:8000/tasks`
- **Node.js**: `http://localhost:8001/tasks`
- **Request Body**:
  ```json
  {
    "text": "Your new task description"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task added successfully"
  }
  ```

## 🔄 Migration Details

This project demonstrates a successful migration from Python FastAPI to Node.js Express:

### Technology Stack Migration
| Component | Python (Original) | Node.js (Migrated) |
|-----------|-------------------|-------------------|
| **Framework** | FastAPI | Express.js |
| **Language** | Python 3.9+ | Node.js 18+ |
| **Package Manager** | pip | npm/yarn |
| **Dev Server** | Uvicorn | Nodemon |
| **Port** | 8000 | 8001 |

### Features Migrated ✅
- ✅ Task list initialization with default tasks
- ✅ GET /tasks endpoint with identical response format
- ✅ POST /tasks endpoint with request validation
- ✅ Error handling for invalid requests
- ✅ Docker containerization
- ✅ Development hot-reloading (Uvicorn → Nodemon)

## 🧪 Testing the APIs

### Using cURL

**Get tasks from Python server:**
```bash
curl http://localhost:8000/tasks
```

**Get tasks from Node.js server:**
```bash
curl http://localhost:8001/tasks
```

**Add a task to Python server:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Learn Python FastAPI"}' \
  http://localhost:8000/tasks
```

**Add a task to Node.js server:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Learn Node.js Express"}' \
  http://localhost:8001/tasks
```

## 🐳 Docker Configuration

The `docker-compose.yml` orchestrates both servers:

- **Python Server**: Runs on port 8000 with volume mounting for development
- **Node.js Server**: Runs on port 8001 with Nodemon for hot reloading
- **Networks**: Both servers share the same Docker network
- **Volumes**: Source code mounted for development convenience

## 🔧 Development

### Python Server Development
```bash
cd python-server
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8000
```

### Node.js Server Development
```bash
cd node-server
npm install
npm start  # Uses nodemon for hot reloading
```

## 🚀 Deployment Considerations

- Both servers can run independently in production
- Consider using environment variables for port configuration
- Implement proper logging and monitoring
- Add database persistence instead of in-memory storage
- Consider API versioning for future updates

## 📚 Next Steps

1. **Phase out Python server** once migration is validated
2. **Add database integration** to Node.js server
3. **Implement authentication** and user management
4. **Add comprehensive testing** suite
5. **Deploy to production** environment

---

**Migration powered by GitHub Copilot! 🤖**

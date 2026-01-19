# CRUD Application - React + Node.js + MongoDB

A full-stack CRUD (Create, Read, Update, Delete) application built with React, Node.js, Express, and MongoDB.

## Features

- ✅ Create new items
- ✅ Read/View all items
- ✅ Update existing items
- ✅ Delete items
- ✅ Responsive UI
- ✅ RESTful API
- ✅ MongoDB database integration

## Tech Stack

**Frontend:**
- React.js
- Axios for HTTP requests
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Project Structure

```
Test-grading-repo/
├── backend/          # Node.js + Express backend
│   ├── server.js     # Main server file with API routes
│   ├── package.json
│   └── .env.example
├── frontend/         # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API service
│   │   └── App.js         # Main App component
│   ├── package.json
│   └── .env.example
└── README.md
```

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Test-grading-repo
```

### 2. Backend Setup

```bash
cd backend
npm install

# Create .env file from example
cp .env.example .env

# Edit .env and update MongoDB connection string if needed
# Default: mongodb://localhost:27017/crud-app
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install

# Create .env file from example (optional)
cp .env.example .env

# The default API URL is http://localhost:5000/api
```

## Running the Application

### Start MongoDB

Make sure MongoDB is running on your system:

```bash
# If using local MongoDB
mongod
```

Or use MongoDB Atlas (cloud) by updating the MONGODB_URI in backend/.env

### Start the Backend Server

```bash
cd backend
npm start
```

The backend server will start on http://localhost:5000

### Start the Frontend Development Server

Open a new terminal:

```bash
cd frontend
npm start
```

The React app will start on http://localhost:3000

## API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/items | Get all items |
| GET | /api/items/:id | Get a single item by ID |
| POST | /api/items | Create a new item |
| PUT | /api/items/:id | Update an item by ID |
| DELETE | /api/items/:id | Delete an item by ID |

### Example API Request

**Create a new item:**
```bash
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Sample Item","description":"This is a sample item"}'
```

## Usage

1. Open http://localhost:3000 in your browser
2. Use the form to add new items (name and description)
3. View all items in the list below the form
4. Click "Edit" to modify an existing item
5. Click "Delete" to remove an item (with confirmation)

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/crud-app
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Troubleshooting

**Cannot connect to MongoDB:**
- Ensure MongoDB is running (`mongod` command)
- Check the MONGODB_URI in backend/.env
- Verify MongoDB is accessible on the specified port

**CORS errors:**
- Make sure the backend server is running
- Verify the REACT_APP_API_URL in frontend/.env matches your backend URL

**Frontend cannot connect to backend:**
- Ensure both backend and frontend servers are running
- Check that backend is running on port 5000
- Verify no firewall is blocking the connection

## License

MIT

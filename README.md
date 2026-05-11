# Blog Post Template

A full-stack template for building and serving modern blog posts. This project includes a React frontend and an Express.js backend.

## Project Structure

This repository is split into two main directories:

- **`/frontend`**: The user-facing application built with React and Vite.
- **`/server`**: The backend server built with Node.js and Express.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already).
2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```
3. **Install server dependencies:**
   ```bash
   cd ../server
   npm install
   ```

### Running the Application

You'll need to run both the frontend and the server concurrently for full functionality.

**Terminal 1 (Backend):**
```bash
cd server
node index.js
```
*(Note: If you have configured a dev script like `nodemon`, use that instead).*

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

The frontend will typically run on `http://localhost:5173/` by default (handled by Vite), and it will communicate with your backend server.

## Technologies Used

- **Frontend:** React 19, Vite, ESLint
- **Backend:** Node.js, Express, CORS

# Blog Post Template

A modern, responsive template for building and serving blog posts. This project is built using React and Vite.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already).
2. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To run the application locally in development mode:

```bash
npm run dev
```

The app will typically be available on `http://localhost:5173/`.

### Building for Production

To build the static files for deployment:

```bash
npm run build
```
This will generate a `dist` folder containing your optimized, production-ready static files.

## Deployment

Since this is now a purely static frontend, to deploy to platforms like Vercel or Netlify, make sure you configure your deployment settings to use the `frontend` directory as your "Root Directory" so the platform can find your `package.json`.

## Technologies Used

- React 19
- Vite
- ESLint

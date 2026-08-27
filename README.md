# Full-Stack Developer Portfolio

A modern, responsive, full-stack developer portfolio web application built with **React**, **Vite**, **Tailwind CSS**, and a **FastAPI** Python backend.

## 📁 Project Structure

```
developer-portfolio/
│
├── frontend/             # React + Vite UI Application
│   ├── src/
│   │   ├── components/   # Modular UI components (Hero, Projects, Skills, etc.)
│   │   ├── services/     # API integration logic
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/              # FastAPI Python REST API
│   ├── main.py           # Application entrypoint & CORS middleware
│   ├── routes/           # API routes (projects, skills, experience, contact)
│   ├── models/           # Pydantic schemas
│   └── requirements.txt
│
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.10+**
- **Node.js 18+** and **npm**

---

### 1. Backend Setup (FastAPI)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. (Optional) Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   .\venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

   The backend will start at `http://127.0.0.1:8000`.  
   Interactive API documentation will be available at `http://127.0.0.1:8000/docs`.

---

### 2. Frontend Setup (React + Vite)

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install Node dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

   Open your browser at `http://localhost:5173`.

---

## ⚡ Features

- **Interactive Hero Section**: Professional introduction with tech badges and quick links.
- **Dynamic Projects**: Category filtering (All, Full Stack, Frontend, AI/ML, DevOps) with live demo & GitHub repository links.
- **Skills Grid**: Technical proficiency breakdown across Frontend, Backend, Cloud/DevOps, Databases, and AI/ML.
- **Experience Timeline**: Career history with roles, achievements, and impact summaries.
- **Connected Contact Form**: Fully functional form submission connecting to the FastAPI backend API with client validation and feedback.
- **Dark Mode Modern Aesthetic**: Clean, responsive layout designed with Tailwind CSS and Lucide icons.


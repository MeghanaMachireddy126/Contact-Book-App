🚀 Contact Book Backend

A fast, scalable Node.js + Express backend for managing contacts, integrated with PostgreSQL, and designed to work seamlessly with a React frontend. Perfect for deploying on Render or any cloud service.

🌟 Features

📝 CRUD Operations: Add, view, update, and delete contacts.

💾 PostgreSQL Database: Persistent and reliable storage.

🔒 Environment Variables: Secure credentials management with .env.

☁️ Deployment Ready: Works perfectly on Render, Heroku, or any cloud.

⚡ Lightweight & Efficient: Minimal setup, high performance.

🛠 Tech Stack
Layer	Technology
Backend	Node.js, Express
Database	PostgreSQL (Neon)
Env Config	dotenv
Versioning	Git, GitHub
🚀 Quick Start
1️⃣ Clone the repository
git clone https://github.com/yourusername/contact-book-backend.git
cd contact-book-backend

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file:

PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@host:port/dbname


⚠️ Do not commit your .env file! Use .env.example as a reference.

4️⃣ Start the server
node server.js


✅ You should see:

Server running on port 5000
Contacts table is ready

☁️ Deployment on Render

Sign in to Render
.

Create a Web Service and connect your GitHub repository.

Add environment variables (PORT, NODE_ENV, DATABASE_URL).

Build & Start Commands:

Build Command: npm install
Start Command: node server.js


Deploy and access your backend API via the URL provided by Render.

📁 Project Structure
backend/
├─ server.js          # Main backend server
├─ package.json       # Dependencies & scripts
├─ package-lock.json
├─ .gitignore         # node_modules, .env
└─ .env.example       # Example env variables

🤝 Contributing

Fork this repository

Create a branch: git checkout -b feature/your-feature

Make your changes

Commit: git commit -m "Add feature"

Push: git push origin feature/your-feature

Open a Pull Request

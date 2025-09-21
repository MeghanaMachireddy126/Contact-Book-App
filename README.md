🚀 Contact Book Backend

A powerful, fast, and scalable Node.js + Express backend for managing your contacts!
Built with PostgreSQL, designed to seamlessly integrate with a React frontend, and ready for deployment on Render.

🌟 Features

📝 Full CRUD functionality — Add, Read, Update, Delete contacts effortlessly.

💾 PostgreSQL database — Reliable and persistent storage for all your data.

🔒 Secure environment variables — Manage secrets safely with .env.

☁️ Cloud-ready — Deploy your backend instantly on Render or any cloud platform.

⚡ Lightweight & Efficient — Minimal setup, blazing-fast performance.

🛠 Tech Stack
Layer	Technology
Backend	Node.js + Express
Database	PostgreSQL (Neon)
Env Config	dotenv
Versioning	Git + GitHub
🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/yourusername/contact-book-backend.git
cd contact-book-backend

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in the root folder:

PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@host:port/dbname


⚠️ Warning: Never commit your real .env! Use .env.example as a reference.

4️⃣ Start the server
node server.js


Expected output:

Server running on port 5000
Contacts table is ready

☁️ Deployment on Render

Log in to Render

Click New → Web Service and connect your GitHub repo

Add environment variables in Render: PORT, NODE_ENV, DATABASE_URL

Use the following commands:

Build Command: npm install
Start Command: node server.js


Deploy and access your backend API via the Render-provided URL.

📁 Project Structure
backend/
├─ server.js          # Main backend server
├─ package.json       # Dependencies & scripts
├─ package-lock.json
├─ .gitignore         # node_modules, .env
└─ .env.example       # Example environment variables

🤝 Contributing

Fork the repository

Create a new branch: git checkout -b feature/your-feature

Make your changes

Commit: git commit -m "Add feature"

Push: git push origin feature/your-feature

Open a Pull Request

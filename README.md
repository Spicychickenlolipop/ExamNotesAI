🚀 ExamNotesAI
<p align="center"> <img src="client/public/logo.png" width="120" /> </p> <p align="center"> <b>Generate Smart Exam Notes with AI ⚡</b><br/> Turn any topic into structured, exam-ready notes instantly. </p>

✨ What is ExamNotesAI?

ExamNotesAI is a full-stack AI application that helps students generate:

📄 Clean structured notes
🧠 Concept-focused summaries
📊 Visual explanations (charts + diagrams)
📥 Downloadable PDF notes

All powered by Google Gemini AI.

🎯 Why this project stands out

Unlike basic note generators, this app includes:

AI + visual learning (charts & diagrams)
PDF export system
Authentication + payments (real SaaS model)
Clean modular architecture (scalable backend)
🖥️ UI Preview
<img width="1599" height="820" alt="Screenshot 2026-04-18 233925" src="https://github.com/user-attachments/assets/d27677e4-f3a5-47a6-9f8b-1ee257102376" />
<img width="1599" height="819" alt="Screenshot 2026-04-18 234037" src="https://github.com/user-attachments/assets/90779e68-f2aa-43cd-bf2f-4102e83c01d8" />
<img width="1599" height="814" alt="Screenshot 2026-04-18 234053" src="https://github.com/user-attachments/assets/5168a035-acbf-4aca-9327-0adc8fa2a860" />

⚡ Features
🤖 AI Engine
Google Gemini API integration
Smart prompt building system
Structured and readable output
📊 Visualization
Recharts for graphs
Mermaid for diagrams
📄 Export System
Generate downloadable PDFs using PDFKit
🔐 Authentication
JWT-based login/signup
Secure protected routes
💳 Payments
Stripe integration
Credit-based usage system
⚙️ Performance
Vite for lightning-fast frontend
Redux Toolkit for state management
🏗️ Architecture
Frontend (React + Redux)
        ↓
API Layer (Axios)
        ↓
Backend (Node + Express)
        ↓
Services Layer (Gemini AI, Stripe, PDF)
        ↓
Database (MongoDB)
🛠️ Tech Stack
🎨 Frontend
React 19
Vite
Tailwind CSS
Redux Toolkit
React Router
Motion (animations)
Recharts
Mermaid
React Markdown
⚙️ Backend
Node.js
Express 5
MongoDB + Mongoose
JWT Authentication
Google Generative AI
PDFKit
Stripe
📂 Folder Structure
client/
 ├── components/
 ├── pages/
 ├── redux/
 ├── services/
 └── utils/

server/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── services/
 └── utils/
⚙️ Setup Instructions
1️⃣ Clone
git clone https://github.com/Spicychickenlolipop/ExamNotesAI.git
cd ExamNotesAI
2️⃣ Backend
cd server
npm install

Create .env

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_key
STRIPE_SECRET_KEY=your_key

Run:

npm run dev
3️⃣ Frontend
cd client
npm install
npm run dev
🚀 Deployment
Frontend → Vercel
Deploy client
Build: npm run build
Backend → Render
Add env variables
Start: npm run dev
Database → MongoDB Atlas
Create cluster
Add connection string
🔐 Environment Variables
Variable	Purpose
MONGO_URI	Database connection
JWT_SECRET	Authentication
GEMINI_API_KEY	AI generation
STRIPE_SECRET_KEY	Payments
📈 Future Improvements
🧠 Multi-language note generation
📱 Mobile app version
🧾 AI quiz generator
📊 Progress tracking dashboard
🎓 Personalized study plans
🤝 Contributing
Fork → Clone → Branch → Commit → Pull Request
📄 License

ISC License

👨‍💻 Author

GitHub:
https://github.com/Spicychickenlolipop

⭐ Show Your Support

If you like this project:

👉 Give it a star ⭐
👉 Share with your friends
👉 Use it for your exams 😄

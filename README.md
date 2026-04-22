# 🚀 ExamNotesAI

<p align="center">
  <img src="client/public/logo.png" width="110" />
</p>

<p align="center">
  <b>AI-powered notes for smarter exam preparation ⚡</b><br/>
  Generate structured notes, visuals, and PDFs in seconds.
</p>

---

## ✨ Features

* 🤖 AI-generated notes (Google Gemini)
* 📄 Structured summaries with Markdown
* 📥 Export notes as PDF
* 🔐 Authentication (JWT + cookies)
* 💳 Stripe payment integration
* 📊 Charts & diagrams (Recharts + Mermaid)
* ⚡ Fast UI with React + Vite

---

## 🖼️ Screenshots

### 🏠 Home

<img width="1599" height="820" alt="Screenshot 2026-04-18 233925" src="https://github.com/user-attachments/assets/61701da3-8f58-410b-ada1-ef535cd94760" />

### 🧠 Notes Generation

<img width="1599" height="819" alt="Screenshot 2026-04-18 234037" src="https://github.com/user-attachments/assets/ce93a2a3-ac75-44af-8472-cf1448618809" />

### 💳 Payment Page

<img width="1599" height="814" alt="Screenshot 2026-04-18 234053" src="https://github.com/user-attachments/assets/a6a29fea-645f-4a19-9f0a-31e65aedd635" />
<img width="1599" height="819" alt="Screenshot 2026-04-19 003803" src="https://github.com/user-attachments/assets/92e39393-2726-4f92-b297-f5eb1348984b" />

---

## 🛠️ Tech Stack

### Frontend

* React 19 + Vite
* Tailwind CSS
* Redux Toolkit
* React Router
* Axios
* Mermaid + Recharts
* Firebase

### Backend

* Node.js + Express
* MongoDB + Mongoose
* JWT Authentication
* Google Generative AI
* PDFKit
* Stripe

---

## 📂 Project Structure

```bash id="finalsmall"
ExamNotesAI/
├── client/        # React frontend
│   ├── src/
│   └── public/
├── server/        # Node backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/
│   └── utils/
└── README.md
```

---

## ⚙️ Setup

### Clone

```bash id="clone_final"
git clone https://github.com/Spicychickenlolipop/ExamNotesAI.git
cd ExamNotesAI
```

---

### Backend

```bash id="backend_final"
cd server
npm install
```

Create `.env`

```env id="env_final"
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_key
STRIPE_SECRET_KEY=your_key
```

Run

```bash id="run_final"
npm run dev
```

---

### Frontend

```bash id="frontend_final"
cd client
npm install
npm run dev
```

---

## 🚀 Usage

1. Open `http://localhost:5173`
2. Login / Signup
3. Enter topic
4. Generate notes
5. Download PDF

---

## 🌐 Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

## ⭐ Support

If you like this project, give it a ⭐

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

* 🤖 AI-generated exam notes (Google Gemini)
* 📄 Clean, structured summaries
* 📥 Export notes as PDF
* 🔐 Secure authentication (JWT)
* 💳 Stripe payment integration
* 📊 Charts & diagrams (Recharts + Mermaid)
* ⚡ Fast UI with React + Vite

---

## 🛠️ Tech Stack

| Frontend      | Backend            | Services          |
| ------------- | ------------------ | ----------------- |
| React + Vite  | Node.js + Express  | Google Gemini API |
| Tailwind CSS  | MongoDB + Mongoose | Stripe            |
| Redux Toolkit | JWT Auth           | PDFKit            |

---

## 📂 Structure

```bash id="p2n3d8"
client/   # React frontend
server/   # Node backend
```

---

## ⚙️ Setup

### Clone

```bash id="g7k2la"
git clone https://github.com/Spicychickenlolipop/ExamNotesAI.git
cd ExamNotesAI
```

### Backend

```bash id="k3s9fa"
cd server
npm install
```

`.env`

```env id="c9x2mq"
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_key
STRIPE_SECRET_KEY=your_key
```

Run:

```bash id="n4v8pe"
npm run dev
```

### Frontend

```bash id="d8m1zx"
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

## 👨‍💻 Author

GitHub: https://github.com/Spicychickenlolipop

---

## ⭐ Support

If you like this project, give it a ⭐ and share it 🚀

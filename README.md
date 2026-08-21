# ZyraAI

ZyraAI is a full-stack AI chat application built with React, Express, MongoDB, and the OpenAI API. It allows users to start AI conversations, continue previous conversations, manage saved chat threads, and delete conversations they no longer need.

## 🚀 Live Demo

- **Frontend:** https://zyra-ai-mu.vercel.app
- **Backend:** https://zyraai.onrender.com
- **GitHub:** https://github.com/MdHamidAzam/ZyraAi

## ✨ Features

- Create and continue AI conversations
- Persistent chat history stored in MongoDB
- Sidebar with saved conversation threads
- Open previous conversations
- Delete chat threads
- Markdown responses
- Syntax-highlighted code blocks
- OpenAI-powered AI responses
- RESTful backend APIs
- Responsive React user interface
- Production deployment with Vercel and Render

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Markdown
- Highlight.js
- CSS

### Backend
- Node.js
- Express.js
- Mongoose
- REST APIs

### Database
- MongoDB Atlas

### AI
- OpenAI API
- GPT-4o-mini

### Deployment
- Vercel
- Render

## 📁 Project Structure

```text
ZyraAi/
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md

⚙️ Getting Started
Prerequisites
Make sure you have the following installed:
- Node.js 18+
- npm
- MongoDB connection
- OpenAI API key
1. Clone the Repository
git clone https://github.com/MdHamidAzam/ZyraAi.git
cd ZyraAi
2. Configure the Backend
cd Backend
npm install
Create a .env file inside the Backend directory:
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key

Start the backend server:
node server.js

The backend is deployed on Render:
https://zyraai.onrender.com

3. Configure the Frontend
Open a new terminal:
cd Frontend
npm install
npm run dev
Vite will provide a local development URL, normally:
http://localhost:5173
Open that URL in your browser.

🔌 API Endpoints
Method	Endpoint	Description
POST	/api/chat	Send a message and create or continue a chat thread
GET	/api/thread	Get all saved chat threads
GET	/api/thread/:threadId	Get messages for a specific thread
DELETE	/api/thread/:threadId	Delete a chat thread

🔐 Environment & Security
Environment variables are used for sensitive configuration.
The following files/directories should never be committed to GitHub:
.env
node_modules/

Never expose or commit:
- OpenAI API keys
- MongoDB credentials
- Database connection strings
- Other private configuration

🚀 Deployment

Frontend
The React frontend is deployed using Vercel.
Backend
The Node.js/Express backend is deployed using Render.
Database
The application uses MongoDB Atlas for persistent chat and thread storage.

👨‍💻 Author
Md Hamid Azam
GitHub: https://github.com/MdHamidAzam
Portfolio: https://md-hamid-portfolio.vercel.app

# 🤖 ZyraAI — AI Chat Application

ZyraAI is a **full-stack AI chat application** built with **React, Express.js, MongoDB, and the OpenAI API**.

It allows users to start AI conversations, continue previous conversations, manage saved chat threads, and delete conversations they no longer need. The application is deployed in production using **Vercel** and **Render**, with persistent conversation data stored in **MongoDB Atlas**.

---

## 🚀 Live Demo

| Service | Link |
|---|---|
| 🌐 Frontend | [ZyraAI](https://zyra-ai-mu.vercel.app) |
| ⚙️ Backend API | [ZyraAI Backend](https://zyraai.onrender.com) |
| 💻 GitHub | [Source Code](https://github.com/MdHamidAzam/ZyraAi) |

---

## ✨ Features

- 💬 Create and continue AI conversations
- 🧠 OpenAI-powered AI responses
- 💾 Persistent chat history with MongoDB
- 📚 Saved conversation threads
- 🔄 Continue previous conversations
- 🗑️ Delete individual chat threads
- 📝 Markdown-rendered AI responses
- 💻 Syntax-highlighted code blocks
- 📱 Responsive React interface
- 🔌 RESTful backend APIs
- ☁️ Production deployment with Vercel and Render

---

## 🖥️ Application Overview

ZyraAI follows a full-stack architecture where the React frontend communicates with an Express.js backend through REST APIs.

The backend handles:

1. User messages
2. Conversation/thread management
3. OpenAI API communication
4. MongoDB persistence
5. Chat retrieval and deletion

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite      │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │
                         REST API Calls
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express.js API    │
                    │      Backend        │
                    └───────┬─────┬───────┘
                            │     │
                 ┌──────────┘     └──────────┐
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │   MongoDB Atlas │        │   OpenAI API    │
        │ Chat Persistence│        │  AI Responses   │
        └─────────────────┘        └─────────────────┘
```

---

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

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

## 📁 Project Structure

```text
ZyraAi/
│
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
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm
- MongoDB connection
- OpenAI API key
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/MdHamidAzam/ZyraAi.git
cd ZyraAi
```

---

### 2. Configure the Backend

Navigate to the backend:

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

Start the backend:

```bash
node server.js
```

The backend will run locally according to the server configuration.

Production backend:

```text
https://zyraai.onrender.com
```

---

### 3. Configure the Frontend

Open a new terminal:

```bash
cd Frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/chat` | Send a message and create or continue a chat thread |
| `GET` | `/api/thread` | Retrieve all saved chat threads |
| `GET` | `/api/thread/:threadId` | Retrieve messages from a specific thread |
| `DELETE` | `/api/thread/:threadId` | Delete a chat thread |

---

## 🔄 Application Flow

```text
User enters message
        ↓
React Frontend
        ↓
POST /api/chat
        ↓
Express.js Backend
        ↓
OpenAI API
        ↓
AI Response
        ↓
MongoDB
        ↓
Response returned to Frontend
        ↓
Conversation displayed to User
```

For existing conversations, the thread ID is used to continue the conversation and retrieve its stored messages.

---

## 🔐 Environment & Security

Sensitive credentials are managed through environment variables.

### Never commit the following:

```text
.env
node_modules/
```

Never expose:

- OpenAI API keys
- MongoDB credentials
- MongoDB connection strings
- Private environment variables
- Other sensitive configuration

A `.gitignore` file should include sensitive/local files such as:

```gitignore
node_modules/
.env
```

---

## ☁️ Deployment

### Frontend — Vercel

The React/Vite frontend is deployed using Vercel.

**Production URL:**

https://zyra-ai-mu.vercel.app

### Backend — Render

The Express.js backend is deployed using Render.

**Production API:**

https://zyraai.onrender.com

### Database — MongoDB Atlas

MongoDB Atlas provides persistent storage for chat conversations and thread data.

---

## 📸 Screenshots

Add application screenshots here to make the repository more attractive to recruiters.

Suggested screenshots:

```text
1. Main Chat Interface
2. Sidebar / Saved Conversations
3. AI Markdown Response
4. Code Syntax Highlighting
5. Previous Conversation
```

Example:

```md
## 📸 Screenshots

### Chat Interface

![ZyraAI Chat Interface](./screenshots/chat-interface.png)

### Conversation History

![ZyraAI Conversation History](./screenshots/conversation-history.png)
```

---

## 🧠 What I Learned

Building ZyraAI helped me work with:

- React component architecture
- REST API development
- Express.js backend design
- MongoDB and Mongoose
- OpenAI API integration
- Persistent conversation management
- Markdown rendering
- Code syntax highlighting
- Frontend-backend communication
- Environment variable management
- Production deployment
- Debugging full-stack applications

---

## 🚀 Future Improvements

Potential improvements for future versions:

- 🔐 User authentication
- 👤 User-specific conversation history
- 📎 File/document uploads
- 🖼️ Image understanding
- 🎙️ Voice conversations
- 🌙 Dark/light theme
- ⚙️ User settings
- 📊 Usage analytics
- 🧹 Conversation search
- ✏️ Rename chat threads

---

## 👨‍💻 Author

### Md Hamid Azam

B.Tech Computer Science & Engineering

**GitHub:**  
https://github.com/MdHamidAzam

**Portfolio:**  
https://md-hamid-portfolio.vercel.app

---

## ⭐ Support

If you find ZyraAI interesting, consider giving the repository a ⭐ on GitHub.

---

### 📄 License

This project is intended for learning and portfolio purposes.

# Zyra AI

Zyra AI is a full-stack AI chat application built with React, Express, MongoDB, and the OpenAI API. It lets users start conversations, revisit saved chat threads, and delete threads they no longer need.

## Features

- Create and continue AI conversations
- Persistent chat history stored in MongoDB
- Sidebar with saved conversation threads
- Open or delete previous conversations
- Markdown responses with syntax-highlighted code blocks
- Clear API error handling for OpenAI requests

## Tech Stack

- **Frontend:** React, Vite, React Markdown, Highlight.js
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
- **AI:** OpenAI Chat Completions API (`gpt-4o-mini`)

## Project Structure

```text
ZyraAi/
├── Backend/       # Express API, database models, and OpenAI integration
├── Frontend/      # React + Vite user interface
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- A MongoDB connection string
- An OpenAI API key

### 1. Configure the backend

```bash
cd Backend
npm install
```

Create a `Backend/.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

Start the API server:

```bash
node server.js
```

The backend runs at `http://localhost:8080`.

### 2. Configure the frontend

Open a second terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`) in your browser.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/chat` | Send a message and create or continue a chat thread |
| `GET` | `/api/thread` | Get all chat threads |
| `GET` | `/api/thread/:threadId` | Get messages for one thread |
| `DELETE` | `/api/thread/:threadId` | Delete a chat thread |

## Environment and Security

The project ignores `.env` files and `node_modules` directories. Never commit API keys, MongoDB credentials, or other private configuration to GitHub.

## Author

Created by [Md Hamid Azam](https://github.com/MdHamidAzam).

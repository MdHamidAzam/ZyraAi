# ZyraAI — AI Chat Application

A full-stack AI chat application built with **React, Express.js, MongoDB Atlas, and the OpenAI API**. ZyraAI lets users interact with AI, continue previous conversations, manage saved chat threads, and view formatted responses with Markdown and syntax-highlighted code.

**Live Demo:** [ZyraAI](https://zyra-ai-mu.vercel.app) · **Backend API:** [ZyraAI Backend](https://zyraai.onrender.com) · **Source Code:** [GitHub Repository](https://github.com/MdHamidAzam/ZyraAi)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Application Workflow](#application-workflow)
- [Security](#security)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

## Overview

ZyraAI is a full-stack AI chat application designed to provide an interactive conversational experience through a clean, responsive interface.

The React frontend communicates with an Express.js backend through REST APIs. The backend integrates with the OpenAI API to generate responses and uses MongoDB Atlas to persist conversations, allowing users to revisit and continue previous chat threads.

The project demonstrates practical implementation of frontend development, backend API design, database integration, AI API integration, and cloud deployment.

## Features

- **AI-Powered Conversations** — Send messages and receive responses generated through the OpenAI API.
- **Persistent Chat History** — Store conversations in MongoDB Atlas.
- **Conversation Management** — Create, retrieve, continue, and delete chat threads.
- **Markdown Rendering** — Display formatted AI responses.
- **Syntax-Highlighted Code** — Improve readability of code snippets in responses.
- **RESTful APIs** — Separate frontend and backend responsibilities.
- **Responsive Interface** — Use the application across desktop and mobile screen sizes.
- **Production Deployment** — Frontend hosted on Vercel and backend hosted on Render.

## Live Demo

| Service | Link |
|---|---|
| Frontend | [Open ZyraAI](https://zyra-ai-mu.vercel.app) |
| Backend API | [Open Backend](https://zyraai.onrender.com) |
| Source Code | [View on GitHub](https://github.com/MdHamidAzam/ZyraAi) |

> **Note:** The backend may take some time to respond if the hosting service has put it to sleep.

## Architecture

ZyraAI follows a client-server architecture with separate responsibilities for the user interface, API layer, database, and AI service.

```text
                    User
                      |
                      v
              React + Vite
                 Frontend
                      |
                 REST APIs
                      |
                      v
              Express.js API
                 Backend
                 /      \
                v        v
          MongoDB Atlas  OpenAI API
          Chat Storage  AI Responses
```

### Component Responsibilities

| Component | Responsibility |
|---|---|
| React + Vite | User interface and chat interactions |
| Express.js | Request handling and application logic |
| REST APIs | Communication between frontend and backend |
| Mongoose | MongoDB data modeling and database operations |
| MongoDB Atlas | Persistent conversation and thread storage |
| OpenAI API | AI-generated conversational responses |
| Vercel | Frontend hosting |
| Render | Backend hosting |

## Tech Stack

**Frontend**
- React.js
- Vite
- React Markdown
- Highlight.js
- CSS

**Backend**
- Node.js
- Express.js
- Mongoose
- REST APIs

**Database**
- MongoDB Atlas

**AI Integration**
- OpenAI API
- GPT-4o-mini

**Deployment**
- Vercel
- Render
- MongoDB Atlas

## Project Structure

```text
ZyraAi/
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md
```

*This structure highlights the main directories and files; the actual repository may contain additional files.*

## Getting Started

Follow these steps to run ZyraAI locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) — version 18 or later
- npm
- [Git](https://git-scm.com/)
- A MongoDB connection string
- An OpenAI API key with API access and available usage credits

### 1. Clone the Repository

```bash
git clone https://github.com/MdHamidAzam/ZyraAi.git
cd ZyraAi
```

### 2. Set Up the Backend

Navigate to the backend directory and install dependencies:

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

Replace the placeholder values with your actual credentials.

Start the backend:

```bash
node server.js
```

The backend will start on the port configured in the server application.

### 3. Set Up the Frontend

Open a separate terminal from the project root:

```bash
cd Frontend
npm install
npm run dev
```

Vite will display the local development URL in the terminal. The default is usually:

```text
http://localhost:5173
```

Open the displayed URL in your browser to use ZyraAI.

### 4. Verify the Application

- Confirm that the backend starts without configuration errors.
- Ensure MongoDB Atlas is reachable and its network access rules permit the connection.
- Verify that the OpenAI API key is valid and has available usage.
- Confirm that the frontend is configured to communicate with the correct backend URL.

**Troubleshooting:** If the frontend cannot reach the backend, check the backend URL, CORS configuration, server logs, and any frontend environment settings required by your existing code.

## Environment Variables

ZyraAI uses environment variables to configure sensitive credentials.

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `OPENAI_API_KEY` | OpenAI API key |

Keep these values private. Never commit real credentials to GitHub or expose the OpenAI API key in frontend code.

## API Endpoints

The backend exposes the following REST API endpoints.

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/chat` | Create or continue a conversation and send a message |
| `GET` | `/api/thread` | Retrieve saved conversation threads |
| `GET` | `/api/thread/:threadId` | Retrieve messages from a specific thread |
| `DELETE` | `/api/thread/:threadId` | Delete a specific conversation thread |

The `POST /api/chat` endpoint handles chat requests, while the thread endpoints support conversation retrieval and management.

Refer to the backend implementation for the exact request body, response format, validation rules, and error handling.

## Application Workflow

1. A user enters a message in the React interface.
2. The frontend sends the request to the Express.js backend.
3. The backend processes the request and communicates with the OpenAI API.
4. The generated AI response is associated with the relevant conversation.
5. Conversation data is persisted in MongoDB Atlas.
6. The response is returned to the frontend and rendered in the chat interface.
7. Previously saved conversations can be retrieved and continued using their thread IDs.

## Security

Follow these practices when running or deploying the application:

- Store API keys and database credentials in environment variables.
- Keep `.env` files out of version control.
- Never expose private API keys in frontend JavaScript or browser-visible configuration.
- Configure MongoDB Atlas network access with appropriate restrictions.
- Configure CORS to allow only the intended frontend origins in production.
- Validate incoming API requests and handle errors without leaking sensitive configuration.
- Consider authentication and authorization before allowing users to access or delete private conversations.

Add the following entries to `.gitignore` if they are not already present:

```gitignore
node_modules/
.env
.env.*
!.env.example
dist/
```

An `.env.example` file may be committed with placeholder values, but it must never contain actual secrets.

## Deployment

### Frontend — Vercel

The React and Vite frontend is deployed on Vercel.

**Production URL:** [https://zyra-ai-mu.vercel.app](https://zyra-ai-mu.vercel.app)

### Backend — Render

The Express.js backend is deployed on Render.

**Production URL:** [https://zyraai.onrender.com](https://zyraai.onrender.com)

### Database — MongoDB Atlas

MongoDB Atlas provides persistent storage for conversation and thread data.

Production environment variables should be configured through the hosting provider's environment settings rather than committed to the repository.

## Screenshots

Screenshots help developers and recruiters understand the application before running it.

Add actual application screenshots to a `screenshots/` directory in the repository.

Suggested screenshots:

- Main chat interface
- Sidebar with saved conversations
- Markdown-formatted AI response
- Syntax-highlighted code block
- Previously saved conversation

Once the images are added, use the following Markdown:

```md
## Screenshots

### Chat Interface
![ZyraAI Chat Interface](./screenshots/chat-interface.png)

### Conversation History
![ZyraAI Conversation History](./screenshots/conversation-history.png)

### AI Response
![ZyraAI AI Response](./screenshots/ai-response.png)
```

Replace the example image paths with the actual filenames in your repository.

## What I Learned

Building ZyraAI provided hands-on experience with:

- Designing component-based interfaces using React
- Developing REST APIs with Node.js and Express.js
- Modeling and persisting data using MongoDB and Mongoose
- Integrating the OpenAI API into a full-stack application
- Managing persistent chat threads and conversation history
- Rendering Markdown and syntax-highlighted code
- Connecting frontend and backend services
- Managing environment variables and application configuration
- Deploying a full-stack application to cloud hosting platforms
- Debugging and troubleshooting production issues

## Future Improvements

Potential enhancements for future versions include:

- User authentication and authorization
- User-specific conversation history
- File and document uploads
- Image understanding
- Voice-based conversations
- Dark and light themes
- User settings and preferences
- Usage analytics and rate limiting
- Conversation search
- Rename chat threads

## Author

**Md Hamid Azam**

B.Tech — Computer Science & Engineering

- **GitHub:** [MdHamidAzam](https://github.com/MdHamidAzam)
- **Portfolio:** [Personal Portfolio](https://md-hamid-portfolio.vercel.app)

## License

This project is intended for learning and portfolio purposes. A formal license has not been specified in this README. If you plan to distribute or accept contributions to the project, consider adding an appropriate open-source license.

---

If you find ZyraAI interesting, consider giving the repository a ⭐ on GitHub.

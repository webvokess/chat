## **Chat Web App Documentation**

#### Welcome to the documentation for our Chat Web App! This web application is built using Next.js and provides a real-time chat experience with several features, including JWT token sign-in, one-to-one chatting, group chats, and support for sending and receiving images within chat messages.
---

### **1. Getting Started**

### Prerequisites

Before running the Chat Web App, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository and install dependencies:

```bash
bashCopy code
git clone https://github.com/RasagnyaG/chat.git
cd chat-web-app
npm install

```

### Running the App

Start the development server:

```bash
bashCopy code
npm run dev

```


Visit http://localhost:3000 in your browser to access the Chat Web App.

### **2. Authentication**

### JWT Token Sign-In

Our Chat Web App utilizes JSON Web Tokens (JWT) for user authentication. Users can sign in using their credentials, and upon successful authentication, a JWT token is generated and used to secure subsequent API requests.

### **3. Chat Features**

### One-to-One Chatting

Users can initiate one-to-one chats by selecting a contact from their friends' list. Real-time messages are exchanged, creating a seamless and interactive chatting experience.

### Group Chats

Group chats allow users to create and participate in conversations with multiple members. Users can add or remove participants, and messages sent to the group are delivered to all members in real-time.

### Image Support

Our Chat Web App supports the sharing of images within chat messages. Users can upload and view images directly in the chat interface, enhancing the communication experience.

### **4. Development**

### Folder Structure

The project follows a standard Next.js folder structure. Key folders include:

- **`pages`**: Contains the main pages of the application.
- **`components`**: Reusable React components.
- **`api`**: Serverless functions for handling API requests.

### API Endpoints

The Chat Web App relies on serverless functions to manage API endpoints. These endpoints handle user authentication, message retrieval, and group management.

### WebSocket Integration

Real-time communication is facilitated through WebSocket integration. The app uses WebSocket connections to instantly transmit messages between users, ensuring a responsive chat experience.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

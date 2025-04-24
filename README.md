This is a full-stack blog application built using Go (Golang) for the backend and Angular for the frontend. The app allows users to create, read, update, and delete blog posts. It also includes user authentication, ensuring that only logged-in users can manage their posts.

Features
User Authentication: Users can register, log in, and manage their sessions.

CRUD Operations: Create, read, update, and delete blog posts.

Role-based Access: Users can update or delete only their own posts.

Frontend with Angular: The frontend is built using Angular for a responsive and dynamic user experience.

Backend with Go (Golang): The backend is built using Go, which serves as an API to handle user and post management.

Database: A database (likely MySQL or SQLite) is used to store user and post information.

Tech Stack
Backend: Go (Golang), Gorilla Mux, GORM

Frontend: Angular, RxJS, HTTPClient

Database: MySQL or SQLite

Authentication: JWT (JSON Web Tokens)

Getting Started
Prerequisites
Go: Ensure Go is installed on your machine. You can download it from the official Go website.

Angular CLI: Install Angular CLI globally with the following command:

bash
Copiază
Editează
npm install -g @angular/cli
Database: Set up a MySQL or SQLite database for storing posts and user data.

Setup Backend (Go)
Clone the repository:

bash
Copiază
Editează
git clone https://github.com/DuncaDenis24/BlogPage-in-Golang-Angular.git
cd BlogPage-in-Golang-Angular
Navigate to the backend folder (e.g., backend) and install dependencies:

bash
Copiază
Editează
cd backend
go mod tidy
Set up the database. Ensure your database connection parameters are correctly set in the Go application.

Run the Go server:

bash
Copiază
Editează
go run main.go
The backend should now be running on http://localhost:8080.

Setup Frontend (Angular)
Navigate to the frontend folder (e.g., frontend) and install the required dependencies:

bash
Copiază
Editează
cd frontend
npm install
Set up the API base URL in the Angular app (src/environments/environment.ts):

typescript
Copiază
Editează
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080' // Adjust the URL if necessary
};
Run the Angular application:

bash
Copiază
Editează
ng serve
The frontend should now be running on http://localhost:4200.

API Endpoints
POST /api/login: Log in with email and password, returns a JWT token.

POST /api/register: Register a new user.

GET /api/posts: Get all posts.

POST /api/posts: Create a new post (requires authentication).

GET /api/posts/:id: Get a specific post by ID.

PUT /api/posts/:id: Update a specific post (requires authentication).

DELETE /api/posts/:id: Delete a post (requires authentication).

User Authentication
The backend uses JWT (JSON Web Tokens) to authenticate users. After logging in, the user will receive a token, which should be included in the request header as Authorization: Bearer <token> for all authenticated routes.

Environment Variables
The backend expects the following environment variables to be set:

DB_HOST: The host of the database (e.g., localhost).

DB_PORT: The port of the database (e.g., 3306 for MySQL).

DB_NAME: The name of the database.

DB_USER: The username for the database.

DB_PASSWORD: The password for the database.

Directory Structure
graphql
Copiază
Editează
├── backend/
│   ├── main.go               # Entry point for the Go backend
│   ├── models/               # Contains Go models for the app (e.g., User, Post)
│   ├── controllers/          # API controllers for handling routes
│   ├── middleware/           # JWT and authentication middleware
│   ├── routes/               # API route definitions
│   └── database/             # Database connection setup
├── frontend/
│   ├── src/                  # Angular frontend code
│   │   ├── app/              # Main application components (Posts, Create, Update)
│   │   ├── services/         # Angular services for API interaction
│   │   ├── environments/     # Environment configuration for different builds
│   │   └── assets/           # Static assets (images, styles, etc.)
│   ├── angular.json          # Angular project configuration
│   └── package.json          # Node.js project configuration
└── README.md                 # This file

# BlogPage in Golang & Angular

This project is a full-stack web application for a simple blog, built using Go for the backend and Angular for the frontend. It allows users to view blog posts and features for creating, updating, and deleting posts.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
    * [Backend Setup (Go)](#backend-setup-go)
    * [Frontend Setup (Angular)](#frontend-setup-angular)
* [Project Structure](#project-structure)

## Features

* **View Blog Posts:** Users can see a list of blog posts fetched from the backend.
* **Basic Layout:** Provides a foundational structure for a blog application.

## Technologies Used

**Backend (Go):**

* [Go](https://go.dev/) - Programming language.
* [GORM](https://gorm.io/) - ORM library for database interaction.
* [sqlserver](https://github.com/microsoft/go-mssqldb) - SQL Server driver for Go (based on the initial database setup).
* Other Go standard libraries and third-party packages for tasks like environment variable handling, logging, etc.

**Frontend (Angular):**

* [Angular CLI](https://angular.io/cli) - Command-line interface for Angular development.
* [Angular Framework](https://angular.io/) - Frontend framework for building the user interface.
* [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that provides static typing.
* [Angular Router](https://angular.io/api/router) - For navigation between different views.
* [Angular HttpClient](https://angular.io/api/common/http/HttpClient) - For making HTTP requests to the backend API.
* [FormsModule](https://angular.io/api/forms/FormsModule) - For handling forms (likely used in future development for creating/editing posts).
* [CommonModule](https://angular.io/api/common/CommonModule) - Provides common directives and pipes.
* Other Angular Material or custom CSS for styling.

**Database:**

* [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/) - The database system used for storing blog post data.

## Prerequisites

Before you begin, ensure you have the following installed:

* **Go:** [Installation Guide](https://go.dev/doc/install) (Make sure your `GOPATH` and `PATH` are configured correctly).
* **Angular CLI:** Install globally using npm: `npm install -g @angular/cli` ([Installation Guide](https://angular.io/cli#installation)).
* **Node.js and npm (or yarn):** Angular requires Node.js and its package manager npm (or yarn). [Installation Guide](https://nodejs.org/).
* **Microsoft SQL Server:** You need a running instance of SQL Server to connect to. Ensure you have the necessary credentials and the database is set up (or will be set up by the Go backend if configured to do so).

## Getting Started

Follow the steps below to get the project running on your local machine.

### Backend Setup (Go)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/DuncaDenis24/BlogPage-in-Golang-Angular.git](https://github.com/DuncaDenis24/BlogPage-in-Golang-Angular.git)
    cd BlogPage-in-Golang-Angular/server
    ```

2.  **Install Go dependencies:**
    ```bash
    go mod tidy
    go get [github.com/gin-gonic/gin](https://github.com/gin-gonic/gin)
    go get gorm.io/gorm
    go get gorm.io/driver/sqlserver
    # Install any other dependencies listed in your go.mod file
    ```

3.  **Configure Database Connection:**
    * Locate the database connection string in your Go code (likely in a file like `database/database.go`).
    * Update the connection string to match your SQL Server instance details, including the server name, port, database name, and authentication credentials if necessary.

    ```go
    // Example connection string (may need adjustment)
    dsn := "sqlserver://your_username:your_password@your_server:your_port?database=your_database&encrypt=disable&trustservercertificate=true"
    ```

4.  **Run the Go backend:**
    ```bash
    go run main.go
    ```
    The backend server should start, typically on a default port (check your `main.go` or configuration).

### Frontend Setup (Angular)

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../client
    ```

2.  **Install Angular dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Backend API URL:**
    * Look for where the Angular application makes API calls (likely in a service file, e.g., `src/app/services/posts/post.service.ts`).
    * Update the `apiUrl` variable to point to the address where your Go backend is running (e.g., `http://localhost:8080/api`).

    ```typescript
    // Example in post.service.ts
    private apiUrl = 'http://localhost:8080/api';
    ```

4.  **Run the Angular frontend:**
    ```bash
    ng serve -o
    # or
    yarn start
    ```
    This command will build the Angular application and serve it in your browser, usually at `http://localhost:4200`.

## Project Structure
```bash
BlogPage-in-Golang-Angular/
  server/             # Go backend code
    database/       # Database connection and models
    handlers/       # API request handlers (controllers)
    models/         # Data structures (Go structs)
    routes/         # API endpoint definitions
    main.go         # Entry point for the backend application
    go.mod          # Go module definition
    go.sum          # Go dependencies checksum
  client/             # Angular frontend code
    angular.json    # Angular CLI configuration
    package.json    # Frontend dependencies
    tsconfig.json   # TypeScript configuration
    src/
      app/        # Application source code
        components/ # Angular components
        services/   # Angular services
        app-routing.module.ts # Application routes
        app.component.ts    # Root component
        ...
      assets/     # Static assets
      environments/ # Environment-specific configurations
      index.html    # Main HTML file
      main.ts       # Entry point for Angular
      ...
    node_modules/   # Frontend dependencies (not in Git)
    ...
```
Functionality

![image](https://github.com/user-attachments/assets/17f74bf8-cbdb-4f6d-8698-cd64c64d51a2)   ![image](https://github.com/user-attachments/assets/03d49b23-04c5-4194-84bd-aa45c3af5f4b)    ![image](https://github.com/user-attachments/assets/afa109f7-3383-4fa2-bab7-3e5793ecbfd8)
![image](https://github.com/user-attachments/assets/2cf8d1b4-778a-415a-98d2-c07f82020ebb)   ![image](https://github.com/user-attachments/assets/09606ba2-f9c5-48d8-989d-8b4fef63a299)


![image](https://github.com/user-attachments/assets/e447dc41-d759-426d-9e3b-00a7f318d245)



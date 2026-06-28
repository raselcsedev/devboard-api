# 🚀 DevBoard API

A production-ready backend API built with **Node.js**, **Express.js**, and **TypeScript** following clean architecture and industry best practices.

This project is part of my journey to becoming a **Production-Ready Full Stack Software Engineer**.

---

## 📖 About

DevBoard API is designed as a scalable backend for a task and project management platform.

The goal of this project is to learn and implement real-world backend architecture used in modern SaaS applications.

Current focus includes:

* REST API Design
* Authentication & Authorization
* PostgreSQL
* Prisma ORM
* Docker
* CI/CD
* Production Deployment

---

# 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript

### Security

* Helmet
* CORS
* Cookie Parser

### Environment

* dotenv

### Development

* tsx
* TypeScript

---

# 📂 Project Structure

```text
src/
│
├── config/
│   └── env.ts
│
├── errors/
│   └── AppError.ts
│
├── middleware/
│   ├── error.middleware.ts
│   ├── logger.middleware.ts
│   └── notFound.middleware.ts
│
├── modules/
│   ├── auth/
│   ├── boards/
│   └── users/
│
├── routes/
│   └── index.ts
│
├── utils/
│   ├── apiResponse.ts
│   └── asyncHandler.ts
│
├── app.ts
└── server.ts
```

---

# ✨ Features

* Express 5
* TypeScript
* Modular Architecture
* Global Error Handling
* Centralized API Response
* Async Error Wrapper
* Environment Configuration
* Request Logging
* 404 Middleware
* Production-ready Folder Structure

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/your-username/devboard-api.git

cd devboard-api
```

---

## Install Dependencies

```bash
npm install
```

---

## Create Environment File

Create a `.env` file in the project root.

```env
PORT=5000
NODE_ENV=development
APP_NAME=DevBoard API
API_VERSION=v1
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build Project

```bash
npm run build
```

---

## Run Production Build

```bash
npm start
```

---

# 🌐 API Endpoints

## Root

```
GET /
```

Returns welcome message.

---

## Health Check

```
GET /health
```

Returns server health status.

---

## API Information

```
GET /api/info
```

Returns API metadata.

---

## Authentication

```
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
```

*(Implementation coming soon)*

---

## Users

```
GET /api/v1/users
GET /api/v1/users/:id
```

---

## Boards

```
GET /api/v1/boards
POST /api/v1/boards
```

---

# 📌 Current Progress

* [x] Project Setup
* [x] TypeScript Configuration
* [x] Express Setup
* [x] Environment Variables
* [x] Logger Middleware
* [x] Modular Routing
* [x] API Response Helper
* [x] AppError
* [x] Async Handler
* [x] Global Error Middleware
* [x] 404 Middleware

---

# 🚧 Upcoming Features

* Zod Validation
* PostgreSQL
* Prisma ORM
* JWT Authentication
* Refresh Token Rotation
* Role-Based Access Control (RBAC)
* Docker
* GitHub Actions
* Railway Deployment
* Vercel Deployment
* Unit Testing
* Integration Testing
* Swagger API Documentation

---

# 🎯 Learning Goals

This project is being built to demonstrate production-level backend engineering skills, including:

* Clean Architecture
* SOLID Principles
* Repository Pattern
* Service Layer Pattern
* Secure Authentication
* Scalable API Design
* Production Deployment
* CI/CD Pipeline

---

# 👨‍💻 Author

**Md. Rasel**

Frontend Developer transitioning into Full Stack Engineering.

### Tech Stack

* Next.js
* React.js
* TypeScript
* Express.js
* PostgreSQL
* Prisma ORM
* Docker

---

# 📄 License

This project is licensed under the MIT License.

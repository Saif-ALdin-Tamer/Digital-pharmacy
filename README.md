# 💊 Digital Pharmacy — Full-Stack MERN Pharmacy Marketplace

A modern, full-stack digital pharmacy marketplace built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). This platform enables pharmacies in Egypt to browse, compare, and order medicines and health products from verified distributors and wholesalers.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🏗️ Project Architecture

```
Digital Pharmacy/
├── frontend/                    # React (Vite) Client
│   ├── public/
│   ├── src/
│   │   ├── components/          # Reusable UI Components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── ProductCard/
│   │   │   ├── CategoryIcon/
│   │   │   ├── FeatureCard/
│   │   │   ├── Pagination/
│   │   │   └── SearchBar/
│   │   ├── pages/               # Page Components
│   │   │   ├── Home/
│   │   │   ├── Category/
│   │   │   ├── Login/
│   │   │   └── SignUp/
│   │   ├── data/                # Mock Data Layer
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css            # Design System & Global Styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/                     # Node.js + Express Server 
    ├── src/
    │   ├── config/              # DB connection, environment config
    │   ├── controllers/         # Request handlers (MVC Controllers)
    │   ├── models/              # Mongoose schemas (MVC Models)
    │   ├── routes/              # Express route definitions
    │   ├── middlewares/         # Auth, error handling, validation
    │   ├── services/            # Business logic layer
    │   ├── utils/               # Helper functions & utilities
    │   └── validators/          # Request validation schemas
    ├── server.js                # Entry point
    ├── package.json
    └── .env
```

---

## 🚀 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI library with functional components & hooks |
| **Vite** | Lightning-fast build tool and dev server |
| **React Router v7** | Client-side routing and navigation |
| **React Icons** | Icon library (Font Awesome, Game Icons) |
| **Vanilla CSS** | Custom styling with CSS variables design system |
| **Google Fonts (Inter)** | Modern typography |

### Backend  
| Technology | Purpose |
|------------|---------|
| **Node.js** | Server-side JavaScript runtime |
| **Express.js** | Web framework for RESTful API |
| **MongoDB** | NoSQL database for flexible data storage |
| **Mongoose** | ODM for MongoDB schema modeling |
| **JWT (JSON Web Tokens)** | Stateless authentication & authorization |
| **bcrypt** | Password hashing with salt rounds |
| **express-validator** | Request body validation middleware |
| **dotenv** | Environment variable management |
| **cors** | Cross-Origin Resource Sharing |
| **helmet** | HTTP security headers |
| **morgan** | HTTP request logging |

---

## 🏛️ Backend Architecture & Design Patterns

### MVC Pattern (Model-View-Controller)

The backend follows a strict **MVC architecture** for clean separation of concerns:

```
Request → Route → Controller → Service → Model → Database
                                  ↓
                              Response
```

---

### 🧱 Clean Code Principles

This project follows clean code practices throughout:

- **Single Responsibility** — Each module/function has one job
- **DRY (Don't Repeat Yourself)** — Shared logic extracted into services and utilities
- **Consistent Naming** — camelCase for variables, PascalCase for components, kebab-case for CSS
- **BEM CSS Methodology** — Block__Element--Modifier naming convention
- **Environment Variables** — Secrets stored in `.env`, never committed
- **Error Handling** — Centralized error middleware with custom error classes
- **Input Validation** — All user inputs validated before processing
- **Separation of Concerns** — Routes → Controllers → Services → Models

---

## 📄 Available Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with categories, features, services |
| `/category/:slug` | Category | Product listing with search & pagination |
| `/login` | Sign In | User authentication |
| `/signup` | Sign Up | New user registration |
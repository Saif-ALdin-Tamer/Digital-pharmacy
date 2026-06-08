# 💊 Digital Pharmacy — Full-Stack MERN Pharmacy Marketplace

A modern, full-stack digital pharmacy marketplace built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). This platform enables pharmacies in Egypt to browse, compare, and order medicines and health products from verified distributors and wholesalers.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📸 Screenshots

### Home Page
- Hero section with animated decorative elements
- Shop by category with 7 pharmacy categories
- Feature cards highlighting platform benefits
- Service icons (Bundled Orders, Financial Solutions, Hassle-Free Ordering)
- Interactive phone mockup with floating animation

### Category / Products Page
- Dynamic category banner with icon
- Product grid (6 columns) with search and pagination
- Product cards with request button

### Login & Sign Up
- Split-layout authentication pages
- Gradient left panel with CSS phone mockup illustration
- Form with underline-style inputs and teal accent

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
└── backend/                     # Node.js + Express Server (Planned)
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

### Backend (Planned)
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

#### Models (Mongoose Schemas)
```javascript
// User Model
const userSchema = new Schema({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true },
  phone:    { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
  role:     { type: String, enum: ['pharmacist', 'admin', 'supplier'], default: 'pharmacist' },
}, { timestamps: true });

// Product Model
const productSchema = new Schema({
  name:        { type: String, required: true, index: true },
  category:    { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  price:       { type: Number, required: true },
  supplier:    { type: Schema.Types.ObjectId, ref: 'User' },
  stock:       { type: Number, default: 0 },
  image:       { type: String },
  description: { type: String },
}, { timestamps: true });

// Order, Category, Cart models...
```

#### Controllers
Each controller handles HTTP requests and delegates business logic to the service layer:
- `authController` — Register, Login, Refresh Token, Logout
- `productController` — CRUD operations, search, filter, paginate
- `categoryController` — Category management
- `orderController` — Order creation, status updates, history
- `userController` — Profile management, role-based access

#### Services (Business Logic Layer)
Services encapsulate all business rules, keeping controllers thin:
- `authService` — Password hashing, token generation, validation
- `productService` — Product queries, price comparison logic
- `orderService` — Order processing, bundling, status management

---

### 🔐 Authentication & Security

#### JWT (JSON Web Tokens)
The API uses a **dual-token strategy** for secure authentication:

```
┌─────────────────────────────────────────────────┐
│                JWT Auth Flow                     │
├─────────────────────────────────────────────────┤
│  1. User sends credentials (POST /api/auth/login)│
│  2. Server validates with bcrypt.compare()       │
│  3. Server generates:                            │
│     • Access Token  (15min expiry)               │
│     • Refresh Token (7 days expiry)              │
│  4. Client stores tokens                         │
│  5. Client sends Access Token in headers:        │
│     Authorization: Bearer <token>                │
│  6. Protected routes verify token via middleware  │
│  7. On expiry, refresh token generates new pair  │
└─────────────────────────────────────────────────┘
```

#### bcrypt Password Hashing
All passwords are hashed using **bcrypt** with 12 salt rounds before storage:

```javascript
const salt = await bcrypt.genSalt(12);
const hashedPassword = await bcrypt.hash(password, salt);

// On login verification
const isMatch = await bcrypt.compare(inputPassword, user.password);
```

#### Security Middleware Stack
- **helmet** — Sets secure HTTP headers (CSP, HSTS, X-Frame-Options)
- **cors** — Configured whitelist for allowed origins
- **rate-limiter** — Prevents brute-force attacks (100 requests/15min)
- **express-validator** — Input sanitization and validation
- **mongo-sanitize** — Prevents NoSQL injection attacks

---

### 🌐 RESTful API Design

The API follows **REST conventions** with proper HTTP methods, status codes, and resource naming:

#### Authentication Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login & receive tokens |
| `POST` | `/api/auth/refresh` | Refresh access token |
| `POST` | `/api/auth/logout` | Invalidate refresh token |
| `POST` | `/api/auth/forgot-password` | Request password reset |

#### Product Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Get all products (paginated) |
| `GET` | `/api/products/:id` | Get single product |
| `GET` | `/api/products/search?q=` | Search products |
| `POST` | `/api/products` | Create product (admin/supplier) |
| `PUT` | `/api/products/:id` | Update product |
| `DELETE` | `/api/products/:id` | Delete product |

#### Category Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/categories` | Get all categories |
| `GET` | `/api/categories/:slug/products` | Get products by category |
| `POST` | `/api/categories` | Create category (admin) |

#### Order Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/orders` | Get user's orders |
| `GET` | `/api/orders/:id` | Get order details |
| `POST` | `/api/orders` | Place new order |
| `PATCH` | `/api/orders/:id/status` | Update order status |

#### API Response Format
```json
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": { ... },
  "pagination": {
    "page": 1,
    "limit": 18,
    "totalPages": 5,
    "totalItems": 87
  }
}
```

#### Error Response Format
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Email is required" }
  ]
}
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

## 🎨 Design System

The frontend implements a cohesive design system with CSS custom properties:

| Token | Value | Usage |
|-------|-------|-------|
| `--primary-navy` | `#1B2D5B` | Headers, text, service icons |
| `--primary-blue` | `#2D4A8A` | Category borders, buttons |
| `--accent-teal` | `#00C9A7` | CTAs, highlights, branding |
| `--bg-white` | `#FFFFFF` | Page backgrounds |
| `--bg-light` | `#F5F7FA` | Section backgrounds |
| `--bg-gray` | `#F0F4F8` | Alternate section backgrounds |
| `--text-primary` | `#1A1A2E` | Main text |
| `--text-secondary` | `#6B7280` | Supporting text |
| `--shadow` | `0 2px 8px rgba(27,45,91,0.08)` | Card shadows |
| `--radius-md` | `10px` | Card border radius |
| `--transition` | `all 0.3s ease` | Smooth animations |

---

## ⚡ Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher
- **MongoDB** (local or Atlas cloud)
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/digital-pharmacy.git
cd digital-pharmacy
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
```

3. **Start the frontend development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Backend Setup (When Available)
```bash
cd backend
npm install
cp .env.example .env    # Configure your environment variables
npm run dev             # Starts server on port 5000
```

#### Environment Variables (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/digital-pharmacy
JWT_SECRET=your_jwt_secret_key_here
JWT_REFRESH_SECRET=your_refresh_secret_key_here
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
BCRYPT_SALT_ROUNDS=12
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

---

## 📄 Available Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with categories, features, services |
| `/category/:slug` | Category | Product listing with search & pagination |
| `/login` | Sign In | User authentication |
| `/signup` | Sign Up | New user registration |

### Category Slugs
`drugs` · `baby-care` · `skin-care` · `women-care` · `brands` · `fitness-nutrition` · `makeup-accessories`

---

## 🧩 Component Library

| Component | Props | Description |
|-----------|-------|-------------|
| `Header` | — | Sticky navbar with logo, search, auth links |
| `Footer` | — | 4-column footer with contact info & socials |
| `ProductCard` | `product` | Product display card with image placeholder |
| `CategoryIcon` | `category`, `isActive` | Circular category icon with link |
| `FeatureCard` | `feature` | Feature highlight card with icon |
| `Pagination` | `currentPage`, `totalPages`, `onPageChange` | Page navigation |
| `SearchBar` | `placeholder`, `value`, `onChange`, `itemCount` | Search input with icon |

---

## 🛣️ Roadmap

- [x] Frontend — Home page with all sections
- [x] Frontend — Category/Products page with pagination & search
- [x] Frontend — Login & Sign Up pages
- [x] Frontend — Responsive design
- [x] Frontend — Design system with CSS variables
- [ ] Backend — Express server setup with MVC structure
- [ ] Backend — MongoDB models (User, Product, Category, Order)
- [ ] Backend — JWT authentication with bcrypt
- [ ] Backend — RESTful API endpoints
- [ ] Backend — Input validation & error handling
- [ ] Backend — Role-based access control (RBAC)
- [ ] Integration — Connect frontend to API
- [ ] Feature — Shopping cart functionality
- [ ] Feature — Order management system
- [ ] Feature — Product detail page
- [ ] Feature — Admin dashboard
- [ ] Feature — Arabic (RTL) language support
- [ ] Deployment — Docker containerization
- [ ] Deployment — CI/CD pipeline

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 📞 Contact

**Digital Pharmacy**
- 📧 support@digitalpharmacy.eg
- 📱 +20 2 2345 6789
- 📍 26 July St, Downtown, Cairo, Egypt

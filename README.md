# E-commerce Backend

Backend server for the E-commerce application, providing APIs for user authentication, product management, and shopping cart functionalities.

## Features

- User authentication with JWT
- Product management (CRUD operations)
- Shopping cart management
- Secure API endpoints

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ecommerce-backend.git
    cd ecommerce-backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory with the following:
    ```env
    NODE_ENV=development
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the server:**
    ```bash
    npm run dev
    ```

## API Endpoints

### Authentication
- **Register**: `POST /api/users/register`
- **Login**: `POST /api/users/login`
- **Get Profile**: `GET /api/users/profile`

### Products
- **Get All**: `GET /api/products`
- **Get by ID**: `GET /api/products/:id`
- **Create**: `POST /api/products`
- **Update**: `PUT /api/products/:id`
- **Delete**: `DELETE /api/products/:id`

### Cart
- **Get Items**: `GET /api/cart`
- **Add Item**: `POST /api/cart`
- **Update Item**: `PUT /api/cart/:id`
- **Remove Item**: `DELETE /api/cart/:id`

## License

This project is licensed under the MIT License.

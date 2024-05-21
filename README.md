# E-Commerce Backend

This is the backend for an e-commerce application built using Node.js, Express.js, MongoDB, and Mongoose.

## Features

- User authentication (registration, login, logout)
- Product management (CRUD operations)
- Order management
- Password reset functionality

## Installation

1. Clone the repository:

```bash
git clone <repository-url>

```

2. Install dependencies:

```bash
cd <directory>
npm install
```

3. Start the server:

```bash 
npm run dev
```

4. Open http://localhost:7000 in your browser to view the application.

## Usage

to register a new user: http://localhost:7000/api/v1/users/register

to login: http://localhost:7000/api/v1/users/login

to logout: http://localhost:7000/api/v1/users/logout

to get all products: http://localhost:7000/api/v1/products

to get a specific product: http://localhost:7000/api/v1/products/:id

to get all orders: http://localhost:7000/api/v1/orders

to get a specific order: http://localhost:7000/api/v1/orders/:id

to create a new order: http://localhost:7000/api/v1/orders

to reset password: http://localhost:7000/api/v1/users/reset-password

to change password: http://localhost:7000/api/v1/users/change-password

to send email: http://localhost:7000/api/v1/users/send-email

to get all users: http://localhost:7000/api/v1/users
 

## Set up environment variables:

Create a .env file in the root directory
Define the following environment variables:
PORT: Port number for the server
MONGODB_URI: MongoDB connection URI
ACCESS_TOKEN_SECRET: Secret key for JWT access tokens
REFRESH_TOKEN_SECRET: Secret key for JWT refresh tokens
ACCESS_TOKEN_EXPIRY: Expiry time for access tokens (e.g., "1h" for 1 hour)
REFRESH_TOKEN_EXPIRY: Expiry time for refresh tokens (e.g., "7d" for 7 days)
EMAIL_USER: Your email address for sending emails
EMAIL_PASS: Your email password or app-specific password
EMAIL_FROM: Sender email address

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.


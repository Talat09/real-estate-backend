# Real Estate Backend Project

This is a backend project for a real estate application built using Express, MongoDB, Prisma, and JSON Web Tokens (JWT).

## Features

The project includes the following features:

1. **Authentication**:

   - **Register**: Users can register by providing their username, email, and password.
   - **Login**: Users can log in using their username and password, and receive a JWT token.
   - **Logout**: Users can log out, which will clear their session cookie.

2. **User Management**:
   - **Get Users**: Retrieve a list of all users.
   - **Get User**: Retrieve information about a specific user.
   - **Update User**: Update a user's information, such as name and email.
   - **Delete User**: Delete a user from the system.

The project uses Swagger for API documentation, and the following additional libraries:

- **bcrypt**: For password hashing.
- **cookie-parser**: For handling cookies.
- **swagger-jsdoc**: For generating Swagger documentation.
- **swagger-ui-express**: For serving the Swagger documentation.

## API Endpoints

### Authentication

- **POST /api/V1/auth/register**: Register a new user.
- **POST /api/V1/auth/login**: Log in a user and receive a JWT token.
- **POST /api/V1/auth/logout**: Log out a user and clear the session cookie.

### Users

- **GET /api/V1/users**: Retrieve a list of all users.
- **GET /api/V1/users/{id}**: Retrieve information about a specific user.
- **PUT /api/V1/users/{id}**: Update a user's information.
- **DELETE /api/V1/users/{id}**: Delete a user.

## Technologies Used

- **Express**: A web application framework for Node.js, used for building the API.
- **MongoDB**: A NoSQL database used for storing user data.
- **Prisma**: An ORM (Object-Relational Mapping) tool used for interacting with the MongoDB database.
- **JSON Web Tokens (JWT)**: Used for authentication and authorization.
- **Swagger**: Used for API documentation.

## Installation

------Coming soon-----

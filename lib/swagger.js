// lib/swagger.js
import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Real Estate API",
      version: "1.0.0",
      description: "API Documentation for the Real Estate backend",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  // Path to the API docs
  apis: ["../routes/*.js"], // Adjust this path based on where your routes are located
};

const swaggerSpec = swaggerJsDoc(options);
export default swaggerSpec;

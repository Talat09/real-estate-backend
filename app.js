import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import usersRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();
const port = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:5173",
  "https://frolicking-halva-9e0a62.netlify.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow access
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Enable cookies
};
//for swagger
// Set up Swagger UI
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
        url: `http://localhost:${port}`,
      },
    ],
  },
  // Path to the API docs
  apis: ["./routes/*.js"], // Adjust this path based on where your routes are located
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//
// console.log(swaggerSpec);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/V1/posts", postRoute);
app.use("/api/V1/auth", authRoute);
app.use("/api/V1/test", testRoute);
app.use("/api/V1/users", usersRoute);
app.use("/api/V1/chats", chatRoute);
app.use("/api/V1/messages", messageRoute);
app.get("/", (req, res) => {
  res.send("Hello World! from real estate backend.");
});
app.listen(port, () => {
  console.log("Server listening on Port: ", port);
});

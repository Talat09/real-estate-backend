import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import usersRoute from "./routes/user.route.js";
const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies)
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/V1/posts", postRoute);
app.use("/api/V1/auth", authRoute);
app.use("/api/V1/test", testRoute);
app.use("/api/V1/users", usersRoute);
app.listen(port, () => {
  console.log("Server listening on Port: ", port);
});

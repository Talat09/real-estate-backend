import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
const app = express();
const port = process.env.PORT || 5000;
app.use("/api/V1/posts", postRoute);
app.use("/api/V1/auth", authRoute);
app.listen(port, () => {
  console.log("Server listening on Port: ", port);
});

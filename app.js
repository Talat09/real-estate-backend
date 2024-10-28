import express from "express";
const app = express();
const port = process.env.PORT || 5000;
app.use("/api/V1/test", (req, res) => {
  res.send("Hello From Real Estate!");
});
app.listen(port, () => {
  console.log("Server listening on Port: ", port);
});

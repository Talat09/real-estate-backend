import express from "express";
const router = express.Router();
router.get("/test", (req, res) => {
  res.send("Hi from test Routes!");
});
router.post("/", (req, res) => {
  res.send("Hello World!");
});
router.put("/test", (req, res) => {
  res.send("Hello World!");
});
router.delete("/test", (req, res) => {
  res.send("Hello World!");
});

export default router;

import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hi from test Routes!");
});
router.get("/should-be-logged-in", shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);
export default router;

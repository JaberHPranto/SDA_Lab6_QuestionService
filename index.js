import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import {
  getQuestions,
  postQuestion,
} from "./controllers/questionController.js";

const app = express();
dotenv.config();

// middlewares
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// routes
app.get("/", (req, res) => {
  return res.send("Welcome to Question Solver 👋");
});
app.get("/api/questions", getQuestions);
app.post("/api/questions", postQuestion);

// connection
connectDB();
app.listen(5000, () => {
  console.log("Listening on port 5000");
});

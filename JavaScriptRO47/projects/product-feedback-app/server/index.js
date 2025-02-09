import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 5174;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Product Feedback App - Backend");
});

app.get("/api/categories", (req, res) => {
  const filePath = path.resolve("./server", "categories-db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

app.get("/api/comments", (req, res) => {
  const filePath = path.resolve("./server", "comments-db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

app.get("/api/suggestions", (req, res) => {
  const filePath = path.resolve("./server", "suggestions-db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

app.get("/api/users", (req, res) => {
  const filePath = path.resolve("./server", "users-db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

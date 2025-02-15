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

app.get("/api/suggestions/:suggestionId", (req, res) => {
  const suggestionId = req.params.suggestionId;

  const suggestionsPath = path.resolve("./server", "suggestions-db.json");
  const suggestions = JSON.parse(fs.readFileSync(suggestionsPath, "utf-8"));

  const categoriesPath = path.resolve("./server", "categories-db.json");
  const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));

  // Tip: Search the suggestion with the id sent from frontend
  const suggestion = suggestions.find(
    (suggestion) => suggestion.id === suggestionId
  );
  const category = categories.find((category) => category.id === suggestion.id);

  res.json({ ...suggestion, category: category || null });
});

app.get("/api/suggestions", (req, res) => {
  const suggestionsPath = path.resolve("./server", "suggestions-db.json");
  const suggestions = JSON.parse(fs.readFileSync(suggestionsPath, "utf-8"));

  const categoriesPath = path.resolve("./server", "categories-db.json");
  const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));

  const newSuggestions = suggestions.map((suggestion) => {
    const category = categories.find(
      (category) => suggestion.categoryId === category.id
    );
    return {
      ...suggestion,
      category: category || null,
    };
  });

  res.json(newSuggestions);
});

app.get("/api/suggestions/count", (req, res) => {
  const filePath = path.resolve("./server", "suggestions-db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data.length);
});

app.get("/api/users", (req, res) => {
  const filePath = path.resolve("./server", "users-db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

import express from "express";
import recipes from "./recipes.json" with { type: "json"}
import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// GET handler

// sends a GET request to the server to grab all data
app.get("/api/recipes", (req, res) => {
  // 
  res.status(200).json({ "success": true, "payload": "recipe array", recipes})
})

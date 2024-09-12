import express from "express";
import recipes from "./recipes.json" with { type: "json"}
import {
  getRecipes,
  getRecipeByID,
  createRecipe,
                    updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const         app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json())    ;

   app.listen(PORT,    ()   => {
       console.log(`Server listening on port ${PORT}`);
});

// GET handler

// sends a GET request to the server to grab all data
app.get("/api/recipes", (req, res) => {
  // 
  res.status(200).json({ "success": true, "payload": "recipe array", recipes})
})

//GET request w/ ID

app.get("/api/recipes/:id", (req, res) => {
  // 
  res.status(200).json({ "success": true, "payload": "recipe array", recipes})
})

//POST	/api/recipes	{ body }	create a new recipe	{ success: Boolean, payload: recipe }

app.post("/api/recipes", (req, res) => {
  const newRecipe = req.body.newRecipe

  recipes.push(newRecipe);
  res.status(200).json({ "success": true, "payload": "recipe array", recipes})
})

// PATCH	/api/recipes/:id	{ body }	updated recipe	{ success: Boolean, payload: recipe }

app.patch("/api/recipes/:id", (req, res) => {
  const updatedRecipe = updateRecipeByID(
    req.params.id,
    req.body.recipes
  );
  res.status(200).json({ "success": true, "payload": "recipe array", recipes})
}
)
// DELETE	/api/recipes/:id		recipe deleted	{ success: Boolean, payload: recipe }

app.delete("/api/recipes/:id", (req, res) => {
  const deleteRecipe = deleteRecipeByID(
    req.params.id, 
    req.body.recipes
  );
  res.status(200).json({ "success": true, "payload": "recipe array", recipes})
}
)

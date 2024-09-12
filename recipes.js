import { readFile } from "node:fs";
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

export async function getRecipes() {
const recipes = await fs.readFile(fileName, "utf-8")
return recipes
}
//chatgpt suggestion
// getRecipes().then(recipes => console.log(recipes)).catch(error => console.error(error));
// GET A RECIPE BY ID
export async function getRecipeByID(id) {}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}

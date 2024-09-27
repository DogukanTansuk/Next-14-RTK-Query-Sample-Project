import { RecipeModel } from "./recipeModel";

export interface RecipesResponseModel {
  recipes: RecipeModel[]
  total: number
  skip: number
  limit: number
}

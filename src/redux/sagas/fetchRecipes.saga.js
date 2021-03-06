import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import recipeGet from "../reducers/recipeGet.reducer";

function* fetchRecipes() {
  try {
    console.log("Before");
    console.log(recipes.data);
    const recipes = yield axios.get("/recipes");
    console.log("get all:", recipes.data);
    yield put({ type: "SET_RECIPES", payload: recipes.data });
    console.log("after");
  } catch {
    console.log("get all error");
  }
}



export default fetchRecipes;

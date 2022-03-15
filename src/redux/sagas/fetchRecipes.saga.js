import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import recipeGet from "../reducers/recipeGet.reducer";


function* fetchRecipes() {
  try {
    const recipes = yield axios.get("/recipes");
    console.log("get all:", recipes.data);
    yield put({ type: "SET_RECIPES", payload: recipes.data });
  } catch {
    console.log("get all error");
  }
}

export default fetchRecipes;

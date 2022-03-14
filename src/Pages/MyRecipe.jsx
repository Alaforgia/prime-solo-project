import React from "react";
import RecipesList from "../components/RecipesList";
import SearchRecipes from "../components/SearchRecipes";

function MyRecipes() {
  const recipes = [
    {
      name: "Tomato Bisque",
      image: "src/images/tomatobisque.jpeg",
    },
    {
      name: "Tomato Bisque",
      image: "src/images/tomatobisque.jpeg",
    },
    {
      name: "Tomato Bisque",
      image: "src/images/tomatobisque.jpeg",
    },
    {
      name: "Tomato Bisque",
      image: "src/images/tomatobisque.jpeg",
    },
    {
      name: "Tomato Bisque",
      image: "src/images/tomatobisque.jpeg",
    },
    {
      name: "Tomato Bisque",
      image: "src/images/tomatobisque.jpeg",
    },
    {
      name: "Tomato Bisque",
      image: "src/images/tomatobisque.jpeg",
    },
  ];
  return (
    <div>
      <h1 className="text-center mb-8 text-5xl">My Recipes</h1>
      <SearchRecipes />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default MyRecipes;

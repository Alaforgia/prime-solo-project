import React from "react";
import { useState } from "react";

function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [instruction, setInstruction] = useState("");

  const handleSubmit = () => {

    
  };

  return (
    <>
      <div>
        <h1>Create Recipe</h1>

        <input onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Title" />
        <input onChange={(event) => setIngredient(event.target.value)} type="text" placeholder="Ingredient" />
        <input onChange={(event) => setAmount(event.target.value)} type="text" placeholder="Amount" />
        <input onChange={(event) => setInstruction(event.target.value)} type="text" placeholder="Description" />

        <button onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
}

export default CreateRecipe;

import axios from "axios";
import type { NextPage } from "next";
import React, { useState } from "react";
import RecipeGuide from "../components/recipeGuide";
import type { Recipe } from "../types/recipeTypes";

const Dashboard: NextPage = () => {
  const [inputs, setInputs] = useState<string[]>([""]);
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [recModal, setRecModal] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const array = [...inputs];
    array[index] = value;
    setInputs(array);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const value = e.currentTarget.value;
    if (value !== "" && inputs[inputs.length - 1] !== "") {
      setInputs((prev) => [...prev, ""]);
    }
    if (value === "" && inputs[inputs.length - 1] == "") {
      const array = [...inputs];
      array.splice(index, 1);

      if (array.length == 0) {
        array.push("");
      }

      setInputs(array);
    }
  };

  async function searchRecipe() {
    const query = inputs.toString();
    const response = await axios.get<Recipe[]>(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=81a283bba00a443eb0d1e4027c9fcfb6&ingredients=${query}`
    );
    const data = response.data;
    setRecipes(data);
  }

  return (
    <div className="min-h-screen bg-[#395144] pt-4">
      <div className="mx-5 rounded-xl border-4 border-[#4E6C50] bg-[#F0EBCE] p-3">
        <div className="grid h-64 grid-flow-col grid-cols-5 grid-rows-6 gap-4 ">
          {inputs.map((value, index) => (
            <span key={index}>
              <input
                key={index}
                value={value}
                className="hover-2:border-[#4E6C50] hover:bordeborder-4 rounded-lg border border-solid border-[#AA8B56] bg-transparent py-1 px-1 outline-none"
                type="text"
                onBlur={(e) => handleBlur(e, index)}
                onChange={(e) => handleChange(e, index)}
              ></input>
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={searchRecipe}
          className="mt-4 rounded-lg border-2 border-[#AA8B56] bg-transparent p-1 hover:bg-[#AA8B56]"
        >
          Search!
        </button>
      </div>

      {recModal ? (
        <RecipeGuide setRecModal={setRecModal} id={recipeId} />
      ) : (
        recipe()
      )}
    </div>
  );

  function recipe() {
    return (
      <div className="static mx-5 mt-4 min-h-min gap-3 rounded-xl border-4 border-[#4E6C50] bg-[#F0EBCE] p-3">
        {recipes?.map((recipe) => (
          <div
            key={recipe.id}
            className="static m-2 flex cursor-pointer items-start gap-5 rounded-3xl border border-[#AA8B56] bg-transparent hover:bg-[#AA8B56]"
            onClick={() => {
              setRecipeId(recipe.id), setRecModal(true);
            }}
          >
            <img className="basis-1/4 rounded-3xl p-2" src={recipe.image} />
            <div className="mx-3 my-2 h-8 basis-1/2">
              <div className="font-bold">{recipe.title}</div>
              <p className="font-semibold">Missed Ingredients:</p>
              <br />
              <div>
                <ol>
                  {recipe.missedIngredients.map((ingredients, index) => (
                    <li key={index}>{ingredients.name}</li>
                  ))}
                </ol>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Dashboard;

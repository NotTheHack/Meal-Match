import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import RecipeGuide from "../components/recipeGuide";
import type { Recipe } from "../types/recipeTypes";
import { env } from "../env/client.mjs";

const Dashboard: NextPage = () => {
  const [inputs, setInputs] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [recModal, setRecModal] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<string>("");



  async function searchRecipe() {
    const query = inputs.toString();
    const response = await axios.get<Recipe[]>(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${env.NEXT_PUBLIC_API_KEY}&ingredients=${query}`
    );
    const data = response.data;
    setRecipes(data);
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setInputs(value);
  };

  return (
    <>
    <Head>
    <title>Meal Match</title>
    <meta name="description" content="Meal Match. Your cooking-when-you-dont-know-what-to-cook App!" />
    
    </Head>
    <div className="min-h-screen bg-[#395144] pt-4">
      <div className="flex flex-col rounded-xl border-4 border-[#4E6C50] bg-[#F0EBCE]">

          <input className="border border-black w-[75%] mx-2 my-12 p-1 rounded place-self-center" onChange={handleChange} placeholder="insert the ingredients on your fridge here, separated by comma" ></input>

        <button
          type="button"
          onClick={searchRecipe}
          className=" m-2 w-36 mt-4 rounded-lg border-2 border-[#AA8B56] bg-transparent p-1 hover:bg-[#AA8B56]"
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
    </>
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
              <br />
              
              <p className="font-semibold">Missed Ingredients:</p>
              <br />
              <div className="">
                <ul className="list-disc grid grid-rows-5 grid-cols-4">
                  {recipe.missedIngredients.map((ingredients, index) => (
                    <li key={index} className="">{ingredients.name}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Dashboard;

import type { Dispatch, FC, SetStateAction } from "react";
import { useEffect, useState } from "react";
import type { RecipeInstructions } from "../types/recipeTypes";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { env } from "../env/client.mjs";

interface recipeGuide {
  id: string;
  setRecModal: Dispatch<SetStateAction<boolean>>;
}

const RecipeGuide: FC<recipeGuide> = ({ id, setRecModal }) => {
  const [instructions, setInstructions] = useState<RecipeInstructions>();

  const fetchRecipe = async () => {
    const response = await axios.get<RecipeInstructions>(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${env.NEXT_PUBLIC_API_KEY}&includeNutrition=false`
    );
    const data = response.data;
    setInstructions(data);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (!instructions) return <p>Loading...</p>;

  return (
    <div
      key={id}
      className="static mx-5 mt-4 min-h-min gap-3 rounded-xl border-4 border-[#4E6C50] bg-[#F0EBCE] p-3"
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold" key={null}>
              {instructions!.title}
            </h3>
          </div>
          <div>
            <button
              onClick={() => {
                setRecModal(false);
              }}
            >
              <XMarkIcon className="h-8 w-8 text-red-600" />
            </button>
          </div>
        </div>
        <br/>
        <div className="flex">
          <div className="relative box-border mr-4 h-[20rem] w-[30rem] basis-1/4">
            <img
              className="rounded-3xl shadow-xl"
              style={{ objectFit: "contain" }}
              alt={instructions.title}
              src={instructions.image}
            />
          </div>
          <div key={null} className="basis-3/4 flex gap-12">
            <div
              key={null}
              dangerouslySetInnerHTML={{ __html: instructions!.instructions }}
              className="basis-1/2"
            />
            <div className="box-border w-[20rem] basis-1/2">
              <ul className="w-80 list-disc">
                {instructions!.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className="p-1">
                    {ingredient.original}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeGuide;

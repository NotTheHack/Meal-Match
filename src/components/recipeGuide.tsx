import type { Dispatch, FC, SetStateAction } from "react";
import { useEffect, useState } from "react";
import type { RecipeInstructions } from "../types/recipeTypes";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";

interface recipeGuide {
  id: string;
  setRecModal: Dispatch<SetStateAction<boolean>>;
}

const RecipeGuide: FC<recipeGuide> = ({ id, setRecModal }) => {
  const [instructions, setInstructions] = useState<RecipeInstructions>();

  const fetchRecipe = async () => {
    const response = await axios.get<RecipeInstructions>(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=cb5d4835d64647959c54dd88be14cec8&includeNutrition=false`
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
            <h3 className="font-semibold" key={null}>
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
        <div className="flex justify-between">
          <div className="relative mr-4 h-[20rem] w-[30rem]">
            <Image
              className="rounded-3xl shadow-lg"
              fill
              style={{ objectFit: "contain" }}
              alt={instructions.title}
              src={instructions.image}
            />
          </div>
          <div key={null} className="mr-80 flex w-[50rem] gap-[8rem]">
            <div
              key={null}
              dangerouslySetInnerHTML={{ __html: instructions!.instructions }}
            />
            <div className="box-border flex w-[20rem]">
              <ul className="w-[20rem] list-disc">
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

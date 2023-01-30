import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { RecipeInstructions } from "../types/recipeTypes";
import {XMarkIcon} from '@heroicons/react/24/solid'
import axios from "axios";

interface recipeGuide{
  id:string
  setRecModal:Dispatch<SetStateAction<boolean>>
}

const RecipeGuide: FC<recipeGuide> = ({id, setRecModal}) => {
  
  const [instructions,setInstructions] = useState<RecipeInstructions>()

  const fetchRecipe = async () => {
    const response = await axios.get<RecipeInstructions>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=cb5d4835d64647959c54dd88be14cec8&includeNutrition=false`)
    const data = response.data
    setInstructions(data)
    
  }

  useEffect(() => {
    fetchRecipe();
  },[])

  if(!instructions) return <p>Loading...</p>

  return (
    <div key={id} className="flex min-h-screen static bg-white" >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div><h3 className="font-semibold" key={null}>{instructions!.title}</h3></div>
          <div> <button onClick={() => {setRecModal(false)}}> <XMarkIcon className="h-6 w-6 text-rose-400 bg-yellow-100"/> </button> </div>
        </div>
        <br/>
        <div key={null} className="grid grid-cols-2 gap-10 pt-10">
          <div key={null} dangerouslySetInnerHTML={{__html:instructions!.instructions}}></div>
          <div><ul>{instructions!.extendedIngredients.map((ingredient) => <li className="p-1">{ingredient.original}</li>)}</ul></div>
        </div>
      </div>
    </div>
  );
}

export default RecipeGuide;
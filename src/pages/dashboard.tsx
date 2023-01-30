import axios from "axios";
import { NextPage } from "next";
import React, { useState } from "react";
import RecipeGuide from "../components/recipeGuide";
import { Recipe } from "../types/recipeTypes";


const Dashboard: NextPage = () => {
  const [inputs, setInputs] = useState<string[]>([''])
  const [recipes,setRecipes] = useState<Recipe[]>([])
  const [recModal,setRecModal] = useState<boolean>(false)
  const [recipeId,setRecipeId] = useState<string>('')
  

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
    const value = e.target.value 
    const array = [...inputs]
    array[index] = value
    setInputs(array)
  }

  const handleBlur = (e:React.FocusEvent<HTMLInputElement>,index:number) => {
    const value = e.currentTarget.value
    if(value !== '' && inputs[inputs.length -1] !== ''){
      setInputs((prev) => [...prev, ''])
    }
    if(value === '' && inputs[inputs.length -1] == '' ) {
      const array = [...inputs]
      array.splice(index,1)

      if(array.length == 0){
        array.push('')
      }

      setInputs(array)
    }

  }

    async function searchRecipe(){
      const query = inputs.toString()
      const response = await axios.get<Recipe[]>(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=cb5d4835d64647959c54dd88be14cec8&ingredients=${query}`)
      const data = response.data
      setRecipes(data)
    }

  return (
  <div className="bg-yellow-100 min-h-full">
    <form className="mx-5 p-3 h-64 border grid grid-rows-6 grid-cols-5 grid-flow-col gap-4 border-rose-400 rounded-xl bg-white">
      {inputs.map((value,index) => (
      <span key={index} className="">
        <input key={index} value={value}  className="bg-yellow-100 rounded-sm hover:border hover:border-rose-400" type="text" onBlur={e =>handleBlur(e,index)} onChange={e=> handleChange(e,index)}></input>
      </span>
      ))}
      
    </form>
    <div className="h-24 border border-rose-400 p-3 my-1 mx-5 gap-3 bg-white rounded-xl">
      <button onClick={searchRecipe} className="bg-yellow-200 p-1 border rounded-lg">Search!</button>
    </div>
    <div className="min-h-screen border border-rose-400 p-3 mx-5 gap-3 rounded-xl static bg-white">

      {recModal ? <RecipeGuide setRecModal={setRecModal} id={recipeId}/> : recipe()}

    </div>
    </div>
  );

  function recipe(){
    return(
      <div>
        {recipes.map((recipe) => (
            <div key={recipe.id} className="flex items-start gap-5 bg-gray-100 m-2 rounded-3xl hover:bg-green-100 static" onClick={() => {setRecipeId(recipe.id) , setRecModal(true)}}>
              <img className="basis-1/4 p-2 rounded-3xl" src={recipe.image} />
                <div className="basis-1/2 h-8 mx-3 my-2">
                  <div className="font-bold">{recipe.title}</div>
                  <p className="font-semibold" >Missed Ingredients:</p>
                  <br/>
                  <div> <ol>{recipe.missedIngredients.map((ingredients) => (<li>{ingredients.name}</li>))}</ol> </div>
                </div>
            </div>
        ))}
      </div>
    )
  }
  
}


export default Dashboard

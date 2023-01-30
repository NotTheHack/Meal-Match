import { type NextPage } from "next";
import Head from "next/head";
import foodimg2 from "../../public/foods2.png"
import Image from "next/image";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Meal Match</title>
        <meta name="description" content="Meal Match. Your cooking-when-you-dont-know-what-to-cook App!" />
        
      </Head>
      
        

          <div className="min-h-screen text-center flex flex-row">

            <div className="min-h-screen text-center bg-green-300 flex">
              
              <div className="box-border m-16 h-fit justify-center">
                <p className="font-sans">
                Meal Match: Your Cooking-when-you-dont-know-what-to-cook Personal Recipe Assistant!"
                <br/>
                Meal Match is an app designed to help users find recipe ideas when they don't know what to cook.
                With Meal Match, you can search for recipes based on ingredients you have on hand.
                </p>
              
              <p>But how it works?</p>
              <br/>
              <p>
                Meal Match uses the Spoonacular API to search and parse a list of recipes based on ingredients
                that the user inserts on the prompt, its a great way to find a recipe with ingredients that you already have!
              </p>
              <br/>
              <button className="bg-green-500 px-5 py-4 border-2 border-green-700 rounded-xl tex-bold" >Try it Out!</button>
              </div>

            </div>

              <div className="place-content-center m-24 basis-1/4">
                <Image
                src={foodimg2} 
                alt="foodimage"
                width={300} 
                height={300}
                />
              </div>

          </div>



          

    </>
  );
};

export default Home;


import { type NextPage } from "next";
import Head from "next/head";
import foodimg2 from "../../public/foods2.png"
import Image from "next/image";
import Link from "next/link";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Meal Match</title>
        <meta name="description" content="Meal Match. Your cooking-when-you-dont-know-what-to-cook App!" />
        
      </Head>
      
        

          <div className="min-h-screen text-center flex flex-row items-center">

            <div className="flex min-h-screen items-center bg-[#4E6C50] text-center">
              
              <div className="box-border m-16 h-fit px-40 justify-center">
                <p className="text-white">
                "Meal Match: Your Cooking-when-you-dont-know-what-to-cook Personal Recipe Assistant!"
                  <br/>
                Meal Match is an app designed to help users find recipe ideas when they don't know what to cook.
                With Meal Match, you can search for recipes based on ingredients you have on hand.
                </p>
                  <br/>
                <p className="text-white">How it works?</p>
                  <br/>
                <p className="text-white">
                Meal Match uses the Spoonacular API to search and parse a list of recipes based on ingredients
              the user inserts on the prompt, its a great way to find a recipe with ingredients that you already have!
                </p>
              <br/>
              <Link href='/dashboard'><button className=" bg-[#F0EBCE] px-5 py-4 border-2 border-[#AA8B56] hover:bg-[#AA8B56] hover:border-[#F0EBCE] hover:text-white rounded-xl font-bold" >Try it Out!</button></Link>
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


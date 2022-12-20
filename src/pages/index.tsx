import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import foodimg2 from "../../public/foods2.jpg"
import Image from "next/image";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Meal Match</title>
        <meta name="description" content="Meal Match. Your cooking-when-you-dont-know-what-to-cook App!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-3 m-4">
        <div className="grid grid-cols-2 grid-flow-col gap-5 min-h-screen">

          <div className="min-h-screen text-center">
            
            <div className="box-border h-auto w-5/6">
            Meal Match: Your Cooking-when-you-dont-know-what-to-cook Personal Recipe Assistant!"
            <br/>
            Meal Match is an app designed to help users find recipe ideas when they don't know what to cook.
            With Meal Match, you can search for recipes based on ingredients you have on hand.
            </div>

            

          </div>

          <div className="min-h-screen text-center">
            <div>
              <Image
              src={foodimg2} 
              alt="foodimage"
              width={500} 
              height={300}
              />
            </div>
          
          </div>

          </div>
      </main>
    </>
  );
};

export default Home;


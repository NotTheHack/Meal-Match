import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Meal Match</title>
        <meta name="description" content="Meal Match. Your cooking-when-you-dont-know-what-to-cook App!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1>HELLO THIS IS HOMEPAGE! :D</h1>
      </main>
    </>
  );
};

export default Home;


import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Poppins } from '@next/font/google';

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const poppins = Poppins({
  subsets:['latin'],
  weight:'300',
  variable:'--font-poppins',
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${poppins.variable} font-sans min-h-full bg-[#F0EBCE]`}>
        <Component {...pageProps} />
        </main>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);

import { type AppType } from "next/app";
import { Poppins } from '@next/font/google';


import "../styles/globals.css";

const poppins = Poppins({
  subsets:['latin'],
  weight:'300',
  variable:'--font-poppins',
})

const MyApp:AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
  
      <main className={`${poppins.variable} font-sans min-h-full bg-[#F0EBCE]`}>
        <Component {...pageProps} />
        </main>
    
  );
};

export default MyApp;

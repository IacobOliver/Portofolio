
'use client';
import { useEffect, useState } from "react";
import { AuroraBackground } from "./_components/AuroraBackground";
import SlideLoading from "./_components/SlideLoading";
import Header from "./_components/Header";

export default function Home() {
  const [showAuroraBackground, setShowAuroraBackground] = useState(false);

  useEffect(() => {
    // Delay the showing of the AuroraBackground component
    const timer = setTimeout(() => {
      setShowAuroraBackground(true);
    }, 300); // Adjust the delay time as needed

    // Cleanup function to clear the timer if component unmounts or changes
    return () => clearTimeout(timer);
  }, []); 

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between  bg-black overflow-x-hidden">
      <SlideLoading />

      {showAuroraBackground && 
      <>
      <AuroraBackground showRadialGradient={true} className="w-screen"
        children={
          <>
          <Header/>

          <div id="mainContainer" className="w-full h-full p-10">
            <div id="introduction" className=" text-purple-100 text-[5rem] gap-52">
              <p className="my-2">Hello! I'm Oliver </p>
              
            </div>

          </div>
          </>} /> 


      <a href="http://localhost:3000/test" className="w-full h-36 bg-red-500">
        hehehehe
      </a>
      </>
}

    </main>
  );
}

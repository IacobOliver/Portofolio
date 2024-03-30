
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
          <AuroraBackground showRadialGradient={true} className="w-screen z-0"
            children={
              <>
                <Header />

                <div id="mainContainer" className="grid grid-cols-2 w-full h-full p-10 gap-20 z-20">
                  <div id="introduction" className=" text-purple-100 text-[5rem] gap-52 font-ultra leading-[5rem] font-bold ">
                    <p className="  ">Hello! I'm Oliver </p>
                    <p className="text-purple-300  ml-5">A Full Stack</p>
                    <p className=" gradientText ml-20">DEVELOPER</p>
                    <p className="text-[2rem] my-5 leading-8">I have strong problem-solving and analytical skills, experience
                      with web application development and I have solid
                      understanding of object-oriented programming. Experience with relational and non-relational databases
                      and familiar with cloud platforms. I like working with
                      other people and I consider myself good at debuging
                      and finding efficient solutions.
                      </p>
                      <div className=" flex items-center h-20 mt-16">
                          <div className=" mr-10 gradientText text-5xl group hover:animate-pulse cursor-pointer">
                            Contact me
                            <div className="w-full h-[2.5px]  group-hover:bg-purple-300 duration-500 "></div>
                          </div>
                          <button className="p-4 text-lg text-gray-500 underline">
                            Download CV
                          </button>
                      </div>

                      <div>

                      </div>
                  </div>

                  <div id="moonContainer" className="flex items-center justify-center relative ">
                    <div className="bg-white w-[38rem] h-[38rem] absolute rounded-full bg-opacity-70 blur-xl "></div>
                    <img className="w-[38rem] animate-spin animate-infinite animate-duration-[60s]" src="/images/moon.png"></img>
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

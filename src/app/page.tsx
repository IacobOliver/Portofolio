
'use client';
import { useEffect, useState } from "react";
import { AuroraBackground } from "./_components/AuroraBackground";
import SlideLoading from "./_components/SlideLoading";
import Header from "./_components/Header";

import { Ultra, Lora } from 'next/font/google'
import Image from "next/image";

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

const ultra = Ultra({
  weight: '400',
  subsets: ['latin'],
})


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
          <AuroraBackground showRadialGradient={true} className="w-screen z-0">
                <Header />

                <div id="mainContainer" className="grid grid-cols-5 justify-items-center w-full h-full p-10  z-20">
                  <div id="pfpContainer" className="mr-20 relative col-span-2 h-fit w-fit bg-[#170c24] bg-opacity-30 rounded-br-[400px] rounded-tl-[400px]  rounded-tr-[70px]  rounded-bl-[300px]">
                    <Image width={480} height={10} alt="pfpExtended" className="w-[30rem] rounded-br-[100px] rounded-bl-[50px]" src="/images/pfpExtendedCut.png" draggable={false}/>

                    <div id="moonContainer" className="flex items-center justify-center absolute top-5 -right-[70px]">
                      <div className="bg-white w-[10rem] h-[10rem] absolute rounded-full blur-3xl z-10 "></div>
                      <Image width={160} height={10} alt="moon" className="w-[10rem] animate-spin animate-infinite animate-duration-[60s]" src="/images/moon.png" draggable={false}/>
                    </div>
                  </div>

                  <div id="introduction" className={`flex flex-col justify-center h-full text-purple-100 text-[5rem] leading-[5rem] col-span-3`}>
                    <div id="title" className={`${ultra.className}`}>
                      <p className="  ">Hello! I&apos;m  Oliver </p>
                      <p className="text-purple-300  ml-5">A Full Stack</p>
                      <p className={` gradientText ml-20 tracking-wider`}>DEVELOPER</p>
                    </div>

                    <p className={`text-[1.5rem] leading-9 mt-10 ${lora.className}`}>
                      I have strong problem-solving and analytical skills, experience
                      with web application development and I have solid
                      understanding of object-oriented programming. Experience with relational and non-relational databases
                      and familiar with cloud platforms. I like working with
                      other people and I consider myself good at debuging
                      and finding efficient solutions.
                    </p>

                    <div className={`${lora.className} flex items-center h-20 mt-16 text-4xl`}>
                      <a href="/files/Oliver'sResume1.pdf" download className={`py-4 px-7 group text-purple-600 bg-purple-100 bg-opacity-90 rounded-xl mr-9 shadow-lg shadow-current hover:animate-pulse `}>
                        Resume
                        <i className="fa-regular fa-circle-down ml-3 text-[2rem] group-hover:animate-jump group-hover:animate-once group-hover:animate-duration-300"></i>
                      </a>

                      <div className=" mr-10 gradientText bg-opacity-50 py-4 px-8 rounded-xl  group hover:animate-pulse cursor-pointer shadow-lg shadow-current">
                        Contact me
                        <div className="w-full h-[2px]  group-hover:bg-purple-300 duration-500"></div>
                      </div>
                    </div>
                  </div>

                </div>
                </AuroraBackground>


          <a href="http://localhost:3000/test" className="w-full h-36 bg-red-500">
            hehehehe
          </a>
        </>
      }

    </main>
  );
}

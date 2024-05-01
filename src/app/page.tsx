
'use client';
import { useEffect, useState } from "react";
import  AuroraBackground  from "./_components/AuroraBackground";
import SlideLoading from "./_components/SlideLoading";
import Header from "./_components/Header";

import { Ultra, Lora } from 'next/font/google'
import Image from "next/image";
import AboutMe from "./_components/aboutMe/AboutMe";
import ListProjects from "./_components/projects/ListProjects";
import Alert from "./_components/Alert";
import Footer from "./_components/Footer";
import Experience from "./_components/aboutMe/Experience";

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
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(true)
    }, 2000)
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)

    // Delay the showing of the AuroraBackground component
    const timer = setTimeout(() => {
      setShowAuroraBackground(true);
    }, 300); // Adjust the delay time as needed

    // Cleanup function to clear the timer if component unmounts or changes
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between  bg-black ">
      <SlideLoading />

      {showAuroraBackground &&
        <div className="bg-black w-screen h-fit flex flex-col items-center">
          <AuroraBackground showRadialGradient={true} className="w-screen z-0 rounded-[2rem] shadow-xl shadow-[#1c1c1f]">
            <></>
            <Header />

            <div id="mainContainer" className="grid grid-cols-5 justify-items-center w-full h-full p-10  z-20">
              <div id="pfpContainer" className="mr-20 relative col-span-2 h-fit w-fit bg-[#170c24] bg-opacity-30 rounded-br-[400px] rounded-tl-[400px]  rounded-tr-[70px]  rounded-bl-[300px]">
                <Image width={480} height={10} alt="pfpExtended" className="w-[30rem] rounded-br-[100px] rounded-bl-[50px]" src="/images/pfpExtendedCut.png" draggable={false} />

                <div id="moonContainer" className="flex items-center justify-center absolute top-5 -right-[70px]">
                  <div className="bg-white w-[10rem] h-[10rem] absolute rounded-full blur-3xl z-10 "></div>
                  <Image width={160} height={10} alt="moon" className="w-[10rem] animate-spin animate-infinite animate-duration-[60s]" src="/images/moon.png" draggable={false} />
                </div>
              </div>

              <div id="introduction" className={`flex flex-col justify-center h-full text-purple-100 text-[5rem] leading-[5rem] col-span-3`}>
                <div id="title" className={`${ultra.className}`}>
                  <p className="  ">Hello! I&apos;m  Oliver </p>
                  <p className="text-purple-300  ml-5">A Full Stack</p>
                  <p className={` gradientText ml-20 tracking-wider`}>DEVELOPER</p>
                </div>

                <p className={`text-[1.5rem] leading-9 mt-10 ${lora.className}`}>
                  I am a disciplined and ambitios person, I love programming and always welcome new challenges.
                  I want to  learn new technologies and sharpen my current frontend and backend skills.
                  I like working with other people and I&apos;`m open to new ideas.
                  I enjoy help others and I don&apos;`t hesitate to ask for help myself.
                </p>

                <div className={`${lora.className} flex items-center h-20 mt-16 text-4xl`}>
                  <a href="/files/Oliver'sResume1.pdf" download className={`py-4 px-7 group text-purple-600 bg-purple-100 bg-opacity-90 rounded-xl mr-9 shadow-lg shadow-current hover:animate-pulse `}>
                    Resume
                    <i className="fa-regular fa-circle-down ml-3 text-[2rem] group-hover:animate-jump group-hover:animate-once group-hover:animate-duration-300"></i>
                  </a>

                  <a href="/contact" className=" mr-10 gradientText bg-opacity-50 py-4 px-8 rounded-xl  group hover:animate-pulse cursor-pointer shadow-lg shadow-current">
                    Contact me
                    <div className="w-full h-[2px]  group-hover:bg-purple-300 duration-500"></div>
                  </a>
                </div>
              </div>

            </div>
          </AuroraBackground>

          <AboutMe />

          <Experience />

          <ListProjects />

          <Footer /> 

          <Alert message="This project is still in development!" show={showAlert} setShow={setShowAlert} color="bg-red-500"/>
        </div>
      }
       
    </main>
  );
}

'use client';
import { useEffect, useState } from "react";
import AuroraBackground from "./_components/AuroraBackground";
import SlideLoading from "./_components/SlideLoading";
import Header from "./_components/Header";

import { Ultra, Lora } from 'next/font/google'
import Image from "next/image";
import AboutMe from "./_components/aboutMe/AboutMe";
import ListProjects from "./_components/projects/ListProjects";
import Alert from "./_components/Alert";
import Footer from "./_components/Footer";
import Experience from "./_components/aboutMe/Experience";
import NewListProjects from "./_components/projects/NewListProjects";

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
  const [listProjectsPattern, setListProjectsPattern] = useState(0);

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
    <main className="flex h-screen w-screen flex-col items-center justify-between bg-black   ">
      <SlideLoading />

      {showAuroraBackground &&
        <div className="bg-black w-screen h-fit flex flex-col items-center px-8 sm:px-20">
          <AuroraBackground showRadialGradient={true} className="w-screen pt-[120px] px-8 sm:px-20 z-20 rounded-b-[2rem] shadow-xl shadow-[#1c1c1f]">
            <Header />

            <div id="mainContainer" className="grid grid-cols-5 justify-items-center w-full h-full ">
              <div id="pfpContainer" className="hidden lg:flex  mr-20 relative col-span-2 h-fit w-fit bg-[#170c24] bg-opacity-30 rounded-br-[400px] rounded-tl-[400px]  rounded-tr-[70px]  rounded-bl-[300px]">
                <Image width={480} height={10} alt="pfpExtended" className="min-w-[10rem] rounded-br-[100px] rounded-bl-[50px]" src="/images/pfpExtendedCut.png" draggable={false} />

                <div id="moonContainer" className="flex items-center justify-center absolute top-5 -right-[70px]">
                  <div className="bg-white w-[10rem] h-[10rem] absolute rounded-full blur-3xl z-10 "></div>
                  <Image width={160} height={10} alt="moon" className="w-[10rem] animate-spin animate-infinite animate-duration-[60s]" src="/images/moon.png" draggable={false} />
                </div>
              </div>

              <div id="introduction" className={`flex flex-col justify-center h-full text-purple-100 text-[2.5rem] md:text-[3rem] xl:text-[5rem] leading-[3rem] xl:leading-[5rem] col-span-full lg:col-span-3`}>
                <div id="title" className={`${ultra.className}`}>
                  <p className=" text-center md:text-start ">Hello! I&apos;m  Oliver </p>
                  <p className="text-purple-300  md:ml-5 text-center md:text-start">A Full Stack</p>
                  <p className={` gradientText md:ml-20 tracking-wider text-center md:text-start`}>DEVELOPER</p>
                </div>

                <p className={`text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] leading-5 md:leading-6 xl:leading-9 mt-4 xl:mt-10 ${lora.className}`}>
                  I am a disciplined and ambitios person, I love programming and always welcome new challenges.
                  I want to  learn new technologies and sharpen my current frontend and backend skills.
                  I like working with other people and I&apos;`m open to new ideas.
                  I enjoy help others and I don&apos;`t hesitate to ask for help myself.
                </p>

                <div className={`${lora.className} flex items-center justify-center md:justify-start h-20 mt-10 md:mt-16 text-xl md:text-3xl xl:text-4xl`}>
                  <a href="\files\OliverResume.pdf" download className={`flex items-center py-2.5 md:py-4 px-5 md:px-7 group text-purple-600 bg-purple-100 bg-opacity-90 rounded-xl mr-4 md:mr-9 shadow-lg shadow-current hover:animate-pulse `}>
                    <p>Resume</p>
                    <i className="fa-regular fa-circle-down ml-3 text-[2rem] group-hover:animate-jump group-hover:animate-once group-hover:animate-duration-300"></i>
                  </a>

                  <a href="/contact" className=" md:mr-10 gradientText bg-opacity-50  rounded-xl  group hover:animate-pulse cursor-pointer shadow-lg shadow-current">
                    <p>Contact me</p>
                    <div className="w-full h-[2px]  group-hover:bg-purple-300 duration-500"></div>
                  </a>
                </div>
              </div>

            </div>
          </AuroraBackground>

          <AboutMe />

          <Experience />


          <div id="work" className=" w-full !z-0">
            <div className="flex items-center gap-14">
              <p className={`${ultra.className} text-[3rem] lg:text-[4rem] gradientText`} >My Projects</p>
              <button onClick={() => setListProjectsPattern(listProjectsPattern + 1)} className="flex items-center  select-none rounded-lg bg-purple-100 py-1 md:py-2 px-2.5 md:px-5 text-center  text-[0.5rem] md:text-[0.8rem] xl:text-[1rem] font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40">Switch template</button>
            </div>

            {
              listProjectsPattern % 2 == 0 ? <ListProjects /> : <NewListProjects />
            }
          </div>


          <Footer />

          <Alert message="This project is still in development!" show={showAlert} setShow={setShowAlert} color="bg-red-500" />
        </div>
      }

    </main>
  );
}
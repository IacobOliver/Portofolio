
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
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger, useModal } from "./_components/Modal";

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

const ultra = Ultra({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  const [showAuroraBackground, setShowAuroraBackground] = useState(true);
  const [showAlert, setShowAlert] = useState(false)
  const [listProjectsPattern, setListProjectsPattern] = useState(0);
  const { setOpenModalId } = useModal();

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between bg-black relative  ">
      <SlideLoading />

      <div className="bg-black w-screen h-fit flex flex-col items-center px-8 sm:px-20">
        <AuroraBackground showRadialGradient={showAuroraBackground} className="w-screen pt-[120px] px-8 sm:px-20 z-10 rounded-b-[2rem] shadow-xl shadow-[#1c1c1f]">
          <Header />

          <div id="mainContainer" className="grid grid-cols-5 justify-items-center w-full h-full z-20 ">
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


                <ModalTrigger id="resumeModal" className="overflow-visible">
                  <p className={`flex items-center py-2.5 md:py-4 px-5 md:px-7 group text-purple-600 bg-purple-100 bg-opacity-90 rounded-xl mr-4 md:mr-9 shadow-lg shadow-current hover:animate-pulse `}>
                    <p>Resume</p>
                    <i className="fa-regular fa-circle-down ml-3 text-[2rem] group-hover:animate-jump group-hover:animate-once group-hover:animate-duration-300"></i>
                  </p>
                </ModalTrigger>


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

        <Modal id="resumeModal" className="text-white">
          <ModalBody>
            <ModalContent>
              <div className="  ">
                <p className="mb-5">See my CV</p>
                <div className="flex flex-col xs:flex-row justify-center items-center gap-5 h-full">
                  <a href="\files\OliverResume.pdf" download className="group flex flex-col items-center justify-center w-full py-8 xs:py-20 text-sm xs:text-base border border-[#171717] rounded-lg hover:bg-[#171717] hover:shadow-lg hover:shadow-[#171717] hover:scale-105 transition-transform duration-300">
                    {/* <Image width={80} height={80} alt="pfpExtended" className="fill-[#171717]" src="/downloadIcon.svg" draggable={false} /> */}
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                      className="w-[60px] xs:w-[90px] h-[60px] xs:h-[90px]  group overflow-visible mb-3" >
                      <defs>
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="white" />
                        </filter>
                      </defs>
                      <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#171717" className="group-hover:fill-white group-hover:filter group-hover:drop-shadow-[0_0_4px_white] transition-all duration-100" />
                      <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#171717" className="group-hover:fill-white group-hover:filter group-hover:drop-shadow-[0_0_4px_white] transition-all duration-500" />
                    </svg>
                    <p>Download CV</p>
                  </a>

                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1AU4migDt7NUWhejRJpFVtF8OKFec4C68VxdaQfJ6nKw/edit?usp=sharing"
                    className="group flex flex-col items-center justify-center w-full py-8 xs:py-20 text-sm xs:text-base border border-[#171717] rounded-lg hover:bg-[#171717] hover:shadow-lg hover:shadow-[#171717]   hover:scale-105 transition-transform duration-300">
                    <Image width={80} height={80} alt="pfpExtended" className="w-[60px] xs:w-[90px] h-[60px] xs:h-[90px] mb-3 group-hover:scale-125 group-hover:mb-5 transition-transform duration-300" src="/images/icons/docsIcon.png" draggable={false} />
                    <p>Read Online</p>
                  </a>
                </div>
              </div>
            </ModalContent>
            <ModalFooter>
              <button onClick={() => setOpenModalId(null)}>Close</button>
            </ModalFooter>
          </ModalBody>
        </Modal>

      </div>

    </main>
  );
}
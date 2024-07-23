import { Lora, Ultra } from "next/font/google";
import Image from "next/image";
import React from "react";

const lora = Lora({
    weight: '400',
    subsets: ['latin'],
})

const ultra = Ultra({
    weight: '400',
    subsets: ['latin'],
})

export default function Experience() {
    return (
        <div id="experience" className={`text-purple-300  w-full flex flex-col pt-[2.5rem] items-start ${lora.className} font-normal`}>
            <h1 id="experienceSection" className={`${ultra.className} text-[3rem] lg:text-[4rem] gradientText`} >Experience</h1>

            <div id="experienceContent" className=" bg-black text-purple-100 pb-8 w-full mx-auto flex flex-col items-start lg:flex-row mb-12 ">
                <div id="welcomeText" className="flex flex-col w-full sticky lg:top-36 lg:w-1/4 mt-2 md:mt-12 mb-14 lg:mb-0 pr-8">
                    <p className="ml-2 text-purple-300 uppercase tracking-loose">Working Process</p>
<p className={`text-[1.8rem] md:text-[2rem]   my-4 tracking-wide ${ultra.className}`}>Welcome to my developer journey</p>
                    <p className="text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] text-purple-100 mb-4">
                        Excited to share my coding journey with you!
                        Let&apos;s explore together as we dive into the fascinating world of programming.
                    </p>
                </div>

                <div id="timeline" className="ml-0 w-full lg:w-3/4 sticky">
                    <div className=" mx-auto w-full h-fit">
                        <div className="relative  overflow-hidden lg:py-10 lg:pl-10 h-full w-full ">
                            <div className="border-2-2 border-yellow-555 absolute h-full border"
                                style={{ right: "50%", border: "2px solid hsla(288, 100%, 85%, 1)", borderRadius: "1%" }}></div>
                            <div className="border-2-2 border-yellow-555 absolute h-full border"
                                style={{ left: "50%", border: " 2px solid hsla(288, 100%, 85%, 1)", borderRadius: "1%" }}></div>

                            <div className="relative mb-3 flex justify-between flex-row-reverse items-center w-full left-timeline ">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    <p className={`mb-3 text-base text-purple-300 ${lora.className}`}>December 2022 - Present,<br /> Full Stack Developer </p>
                                    <h4 className={`mb-3 tracking-wide text-lg md:text-3xl ${ultra.className}`}>Clean Code</h4>
                                    <p className={`text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] leading-snug text-purple-100 ${lora.className}`}>
                                        I started learning the MERN stack and Java&apos;s OOP concepts from scratch. Over a year and a half,
                                        I worked on various solo and team projects to enhance my skills. Simultaneously,
                                        I began contributing to the development of an e-learning platform called CleanCodeQuest.
                                        Additionally, I took on freelance work, delivering landing pages to clients to earn extra income.
                                    </p>
                                </div>
                                <div className="flex items-center rounded-full h-1 w-[48%] bg-purple-600 absolute bottom-0 left-0">
                                    <div className="w-8 h-8 rounded-full bg-purple-600 absolute right-[-22px]"></div>
                                </div>
                            </div>

                            <div className="relative mb-3 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1  w-5/12 px-1 py-4 text-left">
                                    <p className="mb-3 text-base text-purple-300">April 2024 - Present,<br /> Full Stack Developer</p>
                                    <h4 className={`mb-3 font-bold text-lg md:text-3xl ${ultra.className}`}>Magic Hub</h4>
                                    <p className="text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] leading-snug text-purple-100 text-opacity-100">
                                        At Magic Hub Romania, I work as a Full Stack Developer, focusing on maintaining and enhancing various websites. Many of these projects are legacy systems built with pure CSS, HTML, and PHP. My primary responsibilities include: <br />
                                        •  Site Maintenance: Ensuring the websites remain functional and up-to-date. <br />
                                        •  Implementation of Requests: Building and implementing new features based on client and stakeholder requests.<br />
                                        •  Legacy System Updates: Modernizing and optimizing old codebases for better performance and security.<br />
                                        •  Full Stack Development: Handling both front-end and back-end tasks to provide comprehensive solutions.<br />
                                        •  Responsible for internship management
                                    </p>
                                </div>
                                <div className="h-1 rounded-full w-[48%] bg-purple-600 absolute bottom-0 right-10 flex items-center ">
                                    <div className="w-8 h-8 rounded-full bg-purple-600 absolute left-[-22px]"></div>
                                </div>
                            </div>
                        </div>
                        <Image width={500} height={500} className="mx-auto -mt-20" src="/images/icons/ExperienceIcon.png" alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Lora, Ultra } from "next/font/google";
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
        <div className={`text-purple-300  w-full flex flex-col pt-[2.5rem] items-start px-20 ${lora.className} font-normal`}>
            <h1 className={`${ultra.className} text-[4rem] gradientText`} >Experience</h1>


            <section>
                <div className="bg-black text-purple-100 pb-8">
                    <div className="container mx-auto flex flex-col items-start md:flex-row mb-12">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 pr-8">
                            <p className="ml-2 text-purple-300 uppercase tracking-loose">Working Process</p>
                            <p className={`text-3xl md:text-[2rem]   my-4 tracking-wide ${ultra.className}`}>Welcome to my developer journey</p>
                            <p className="text-sm md:text-base text-purple-100 mb-4">
                                Excited to share my coding journey with you!
                                Let's explore together as we dive into the fascinating world of programming.
                            </p>
                        </div>

                        <div className="ml-0 lg:w-2/3 sticky">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden py-10 pl-10 h-full w-full ">
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                        style={{ right: "50%", border: "2px solid hsla(288, 100%, 85%, 1)", borderRadius: "1%" }}></div>
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                        style={{ left: "50%", border: " 2px solid hsla(288, 100%, 85%, 1)", borderRadius: "1%" }}></div>

                                    <div className="relative mb-3 flex justify-between flex-row-reverse items-center w-full left-timeline ">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className={`mb-3 text-base text-purple-300 ${lora.className}`}>December 2022 - Present,<br /> Full Stack Developer </p>
                                            <h4 className={`mb-3 tracking-wide text-lg md:text-2xl ${ultra.className}`}>Clean Code</h4>
                                            <p className={`text-sm md:text-base leading-snug text-purple-100 ${lora.className}`}>
                                                I started learning the MERN stack and Java's OOP concepts from scratch. Over a year and a half,
                                                I worked on various solo and team projects to enhance my skills. Simultaneously,
                                                I began contributing to the development of an e-learning platform called CleanCodeQuest.
                                                Additionally, I took on freelance work, delivering landing pages to clients to earn extra income.
                                            </p>
                                        </div>
                                        <div className="flex items-center rounded-full h-1 w-[48%] bg-purple-600 absolute bottom-0 left-0">
                                            <div className="w-8 h-8 rounded-full bg-purple-600 absolute right-[-10px]"></div>
                                        </div>
                                    </div>

                                    <div className="relative mb-3 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-base text-purple-300">April 2024 - Present,<br /> Full Stack Developer</p>
                                            <h4 className={`mb-3 font-bold text-lg md:text-2xl ${ultra.className}`}>Magic Hub</h4>
                                            <p className="text-sm md:text-base leading-snug text-purple-100 text-opacity-100">
                                                In my on-site role, I focused on developing landing pages while also working on a full-stack Tattoo
                                                project using PHP and the Laravel framework.
                                                This experience allowed me to expand my programming skills and broaden my horizons as a developer.
                                            </p>
                                        </div>
                                        <div className="h-1 rounded-full w-[48%] bg-purple-600 absolute bottom-0 right-10 flex items-center ">
                                            <div className="w-8 h-8 rounded-full bg-purple-600 absolute left-[-10px]"></div>
                                        </div>
                                    </div>
                                </div>
                                <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
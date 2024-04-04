"use client"
import { useInView, motion,  } from 'framer-motion';
import { Lora } from 'next/font/google';
import React, { useEffect, useRef, useState } from 'react'
import MaskText from './MaskText';

const lora = Lora({
    weight: '400',
    subsets: ['latin'],
  })

export default function AboutMe() {
    const phrases = [
    "Strong problem - solving and analytical skills, experience with web application development and I have solid",
    "understanding of object oriented programming.",
    "Experience with relational, non-relational databases and familiar with cloud platforms.I like working with",
    "other people and I consider myself good at debuging  and finding efficient solutions",
    ]

    // function MaskText({text, className} : {text : Array<String>, className : String}) {
    //     const body = useRef(null);
    //     const isInView = useInView(body, { margin: "75%" })
    //     const animationForRow = {
    //         initial: { y: "100%" },
    //         enter: (i: number) => ({ y: "0", transition: { duration: 0.90, ease: [0.5, 1.5, 0.68, 1], delay: 0.200 * i }}),
    //        }
           

    //     return (
    //         <div 
    //          ref={body}
    //          >
    //             {
    //                 text.map((phrase, index) => {
    //                     return <div key={index} className="font-bold m-0  overflow-hidden">
    //                         <motion.p  
    //                             className={`${className}`} 
    //                             custom={index} 
    //                             variants={animationForRow} 
    //                             initial="initial" 
    //                             animate={isInView ? "enter" : ""}
    //                             >{phrase}
                                
    //                         </motion.p>
    //                     </div>
    //                 })
    //             }
    //         </div>
    //     )
    // }


    return (
        <div 
         className={`w-full flex flex-col my-[5rem] items-start p-20 ${lora.className} font-normal`}
         >
            <MaskText  text={["About me"]} loadTimer={3000} className={"text-[4rem] gradientText"}  />
            <MaskText text={phrases} loadTimer={6000} className={"text-[1.5rem] text-white"}/>
        </div>
    )
}
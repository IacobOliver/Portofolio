'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import  './NewProjectCard.css';


const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}

}

export default function NewProjectCard({project} : {project : any}) {
    const [isActive, setIsActive] = useState(false);
    const { name, images } = project;

    // .project{
    //     border-top: 2px solid #f0b3ff;
    //     padding-top: 0.8vw;
    //     padding-bottom: 0.8vw;
    //     cursor: pointer;
    //     width: 100%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }
      
    // .project p{
    //     font-size: 5vw;
    //     margin: 0px;
    // }
    // .project p:nth-of-type(1){
    //     margin-right: 0.75vw;
    // }
    // .project p:nth-of-type(2){
    //     margin-left: 0.75vw;
    // }
    // .project:last-of-type{
    //     border-bottom: 2px solid black;
    // }
    // .project img{
    //     width: 10vw;
    //     }

    return (
        <div className="border-t-[2px] border-[#f0b3ff] py-10 cursor-pointer w-full flex justify-center items-center text-3xl" onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}}>
            <p className='m-0'>{name.split(" ")[0]}</p>
            <motion.div className="" variants={anim} animate={isActive ? "open" : "closed"}>
                <img className='w-[10vw]' src={images[0]}></img>
            </motion.div>
            <p className='m-0'> {name.split(" ").slice(1).join(" ")}</p>
        </div>
    )
}
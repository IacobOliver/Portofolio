'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import  './NewProjectCard.css';
import { Ultra } from 'next/font/google';
import Image from 'next/image';



const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}

}

const ultra = Ultra({
    weight: '400',
    subsets: ['latin'],
  })

export default function NewProjectCard({project} : {project : any}) {
    const [isActive, setIsActive] = useState(false);
    const { name, images } = project;

    return (
        <a className={`border-t-[2px] border-[#f0b3ff] py-10 max-h-[200px] cursor-pointer w-full flex justify-center  items-center text-3xl lg:text-5xl ${ultra.className}`} 
             onMouseEnter={() => {setIsActive(true)}} 
             onMouseLeave={() => {setIsActive(false)}}
             href={`project/${project.name.replace(/\s+/g, '')}`}
        >
            <p className='mr-1'>{name.split(" ")[0]}</p>
            <motion.div className="" variants={anim} animate={isActive ? "open" : "closed"}>
                <Image height={200} width={300} className='w-[auto] h-[10vw] mx-3' src={images[0]} alt={project.name}/>
            </motion.div>
            <p className='ml-1'>{name.split(" ").slice(1).join(" ")}</p>
        </a>
    )
}
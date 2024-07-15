'use client'
import { Project } from '@/app/_utils/ProjectData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

export default function ProjectCard({ project }: { project: Project }) {
    const [hover, setHover] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const fadeInAnimationVariants = {
        initial: windowWidth >= 768 ?
         {
            opacity: 0,
            y: 100
        } : {},

        animate: (index: number) => {
            if(windowWidth >= 768){
                return  {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.05 * index
                    }
                }
            }else{
                return {}
            }
           },


        exit:  windowWidth >= 768 ? {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.3
            }
        } : {}
    }

    useEffect(() =>{
        if(window.innerWidth < 768 ){
            setHover(true)
        }
        setWindowWidth(window.innerWidth)
    },[])

    return (
        <motion.a href={project.slug} id="principalContainer" className=" group relative h-full  bg-clip-border text-purple-100 shadow-md"
            onHoverStart={() =>  windowWidth >= 768 ? setHover(true) : null}
            onHoverEnd={() =>  windowWidth >= 768 ? setHover(false) : null}
            >

            <Image className='!w-full !h-full  rounded-2xl' width={700} height={10} alt={project.name} src={project.images[0]} />
            <AnimatePresence>
                {
                    hover &&
                    <motion.div
                        id='hoverPopover'
                        className='flex flex-col items-start justify-end absolute top-0 left-0 w-full h-full py-[1.4rem] px-[2rem] duration-100  '
                        style={{ background: " linear-gradient(to top, rgba(0,0,0,0.75) 30%,  rgba(0,0,0,0.5) 60%,  rgba(0,0,0,0.2) 80%, rgba(1,1,1,0)) 100%" }}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        exit="exit"
                        whileHover="animate"
                    >

                        <p className="mb-2 bloc text-white text-[1.5rem] md:text-[2rem] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {project.name}
                        </p>
                        <p className=" text-[0.8rem] md:text-[1.1rem]  font-light  line-clamp-2   ">
                            {project.description}
                        </p>

                        <div className=' hidden  sm:flex flex-wrap w-full gap-1 md:gap-2 justify-start mt-5'>
                            {project.skills.map((skill, index) =>
                                <motion.div
                                    key={index}
                                    className={`text-purple-100 font-bold px-2.5 md:px-4 py-1 text-[0.8rem] md:text-[1.1rem] bg-purple-100 bg-opacity-40 backdrop-blur-sm rounded-lg`}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"

                                    exit="exit"
                                    custom={index}>
                                    {skill}
                                </motion.div>
                            )}
                        </div>


                    </motion.div>
                }

            </AnimatePresence>

        </motion.a>
    )
}

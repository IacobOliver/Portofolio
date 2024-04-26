'use client';
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Footer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    return (
        <div className="w-full" ref={container}>
            <Logos scrollProgress={scrollYProgress}/>
        </div>
    )
}

const Logos = ({scrollProgress} :{scrollProgress : any}) => {
    const y = useTransform(scrollProgress, [0, 1], [-225, 0])
    return (
        <div className="h-[250px] w-full bg-black overflow-hidden">
            <motion.div style={{y}} className="h-full bg-black flex justify-center gap-10 items-center p-10">
                {
                    [...Array(5)].map((_, i) => {
                        return <img key={`img_${i}`} className="w-[80px] h-[80px]" src={`/medias/${i+1}.jpg`} />
                    })
                }
            </motion.div>
        </div>
    )
}
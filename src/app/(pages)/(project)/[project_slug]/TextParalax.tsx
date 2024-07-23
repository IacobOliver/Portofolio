'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ultra } from 'next/font/google';

interface TextParallaxProps {
    text: string;
}

const ultra = Ultra({
    weight: '400',
    subsets: ['latin'],
  })

export default function TextParallax({ text }: TextParallaxProps) {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, []);

    const Slide = (props: any) => {
        const direction = props.direction === 'left' ? -1 : 1;
        const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);

        return (
            <motion.div style={{ x: translateX, left: props.left }} className="relative flex whitespace-nowrap ">
                <Phrase text={text} /> 
                <Phrase text={text} />
                <Phrase text={text} />
                <Phrase text={text} />
            </motion.div>
        )
    };

    const Phrase = ({ text }: { text: string }) => {
        return (
            <p className= {`text-[5rem] ${ultra.className} px-8 flex gap-5 items-center `}>
              {text}
            </p>
        )
    };

    return (
        <div className='overflow-hidden bg-black text-purple-100 py-10'>
          
            <div ref={container}>
                {scrollYProgress ? (
                    <>
                        <Slide src={"/images/icons/github-mark-white.png"} left={"-40%"} progress={scrollYProgress} />
                    </>
                ) : null}
            </div>
           
        </div>
    );
}

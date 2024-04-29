'use client';
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import { Lora, Ultra } from "next/font/google";

const ultra = Ultra({
    weight: '400',
    subsets: ['latin'],
})

const lora = Lora({
    weight: '400',
    subsets: ['latin'],
})

const pcLink = "https://web.whatsapp.com/send?phone=40770801845";
const phoneLink = "https://wa.me/40770801845"

const link = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? phoneLink : pcLink

const Logos = ({ scrollProgress }: { scrollProgress: any }) => {
    const y = useTransform(scrollProgress, [0, 1], [-225, 0])
    return (
        <div className="w-full bg-black overflow-hidden">
            <motion.div style={{ y }} className="h-full bg-[rgb(20,20,20)] flex flex-col py-10 px-20">
                <p className={`gradientText text-[4rem] ${ultra.className}`}>Get in Touch</p>
                <p className={`text-purple-100 text-[1.1rem] w-1/2 ${lora.className}`}>Thank you for taking the time to explore my portfolio! I&apos;d love to hear from you and discuss how we can collaborate. Let&apos;s stay connected – feel free to reach out and get in touch!</p>
                <div className="flex flex-row w-full my-10">
                    <Icon src="/images/icons/github.png" redirectLink="https://github.com/IacobOliver?tab=overview&from=2024-04-01&to=2024-04-15" />
                    <Icon src="/images/icons/linkedin.png" redirectLink="https://www.linkedin.com/in/oliver-iacob-662b79287/" />

                    <a className="bg-purple-300 hover:bg-purple-400 p-1 rounded-xl w-12 h-12 mx-2 cursor-pointer " data-action="open" data-phone="40770801845" href={link} target="_blank">
                        <img src="images/icons/whatsapp.png"></img>
                    </a>

                    <Icon src="/images/icons/instagram.png" redirectLink="https://www.instagram.com/0lii2003?igsh=dHRmdWJxNXhkYjgy" />
                </div>
            </motion.div>
        </div>
    )
}

const Icon = ({ src, redirectLink }: { src: string, redirectLink: string }) => {
    return (
        <a href={redirectLink} target="_blank" className="bg-purple-300 hover:bg-purple-400 p-1 rounded-xl w-12 h-12 mx-2 cursor-pointer">
            <img src={src} />
        </a>
    )
}


export default function Footer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    return (
        <div className="w-full" ref={container}>
            <Logos scrollProgress={scrollYProgress} />
        </div>
    )
}
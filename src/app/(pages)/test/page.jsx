import Experience from "@/app/_components/aboutMe/Experience";
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

export default function test() {
    return (
        <div className="bg-black min-w-screen min-h-screen">

           <Experience />   

        </div>
    )
}
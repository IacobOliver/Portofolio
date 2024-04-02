"use client"
import { Ultra } from "next/font/google";
import Image from "next/image";
interface ButtonProps {
    text: string;
}
const ultra = Ultra({
    weight: '400',
    subsets: ['latin'],
})

export default function Header() {
    const Button1 = ({ text }: ButtonProps) => {
        return (

            <div className="relative inline-flex h-full mx-12 group text-2xl text-gray-300 hover:text-purple-100">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px group-hover:bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300">
                </div>
                <a href="#" title="Get quote now"
                    className="relative inline-flex items-center py-3 justify-center  hover:py-0 font-bold  transition-all duration-200  rounded-full group-hover:text-[2rem]  "
                    role="button">{text}
                </a>
            </div>

        )
    }

    return (
        <div id='principalContainer' className='w-full py-5 text-white flex justify-between items-center px-10 z-10'>
            <p className={`${ultra.className} text-3xl`}>Iacob Oliver</p>

            <div id='buttons' className='grid grid-cols-3 justify-items-center text-xl font-bold'>
                <Button1 text={"Home"} />
                <Button1 text={"About"} />
                <Button1 text={"Work"} />
            </div>

            <a href="https://github.com/IacobOliver" target="_blank" className="flex w-fit cursor-pointer">
                <Image width={48} height={10} alt="gitHubIcon" src="/images/icons/github-mark-white.png" className="" draggable={false} />
            </a>
        </div>

    )
}

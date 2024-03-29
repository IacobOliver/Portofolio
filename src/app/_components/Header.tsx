
import React from 'react'
interface ButtonProps {
    text: string;
}

export default function Header() {

    const Button = ({ text }: ButtonProps) => {
        return (
            <button className=''>
                {text}
            </button>
        )
    }

    const Button1 = ({ text }: ButtonProps) => {
        return (

            <div className="relative inline-flex h-full mx-12 group">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px group-hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-300 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href="#" title="Get quote now"
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200  rounded-full  "
                    role="button">{text}
                </a>
            </div>

        )
    }




    return (
        <div id='principalContainer' className='w-full py-5 text-white flex justify-between px-10 '>
            <p>Iacob Oliver's Portofolio</p>
            <div id='buttons' className='text-xl font-bold'>
                <Button1 text={"Work"} />
                <Button1 text={"About"} />
                <Button1 text={"Journal"} />
                <Button1 text={"Contact"} />
            </div>
        </div>

    )
}

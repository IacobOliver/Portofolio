
import { Lora, Ultra } from 'next/font/google';
import MaskText from './MaskText';

const lora = Lora({
    weight: '400',
    subsets: ['latin'],
  })

  const ultra = Ultra({
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


    return (
        <div 
         className={`w-full flex flex-col my-[5rem] items-start px-20 ${lora.className} font-normal`}
         >
            <MaskText  text={["About me"]} loadTimer={3000} className={`${ultra.className} text-[4rem] gradientText`}  />
            <MaskText text={phrases} loadTimer={6000} className={` ${lora.className} text-[1.5rem] text-white`}/>
        </div>
    )
}
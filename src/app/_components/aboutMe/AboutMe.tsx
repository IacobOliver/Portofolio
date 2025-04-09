
import { Lora, Ultra } from 'next/font/google';
import MaskText from './MaskText';
import { motion} from "framer-motion"

const lora = Lora({
    weight: '400',
    subsets: ['latin'],
  })

  const ultra = Ultra({
    weight: '400',
    subsets: ['latin'],
  })

  const fadeInAnimationVariants = {
    initial :{
      opacity : 0,
      y : 100
    },
    animate : (index : number) => ({
      opacity :1,
      y : 0,
      transition :{
        delay : 0.05 * index
      }
    })
  }


export default function AboutMe() {
    const phrases = [
    "Strong problem - solving and analytical skills, experience with web application development and I have solid",
    "understanding of object oriented programming.",
    "Experience with relational, non-relational databases and familiar with cloud platforms.I like pair ",
    "programming and I consider myself good at debuging  and finding efficient solutions",
    ]

    const skills = ["Java"," JavaScript", "TypeScript", "Php", "Docker",
    "React", "Angular","Laravel", "PostgreSql", "MySQL", "MongoDB", 
      "SpringBoot" ,"Express", "Node" ,"HTML ","CSS",
      'Tailwind', "Bootstrap", "AWS"]


    return (
        <div 
         id="about_me"
         className={`w-full h-fit flex flex-col lg:flex-row my-[5rem] items-start ${lora.className} font-normal !z-0`}
         >

          <div className='flex flex-col w-full lg:w-2/3 '>
            <MaskText  text={["About me"]} loadTimer={3000} className={`${ultra.className} text-[3rem] lg:text-[4rem] gradientText text-center lg:text-start`}  />
            <MaskText text={phrases} loadTimer={6000} className={` ${lora.className} text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] text-white text-center lg:text-start`}/>
          </div>

          <div className='w-full lg:w-1/3 flex flex-wrap gap-3 justify-center mt-10'>
              {skills.map((skill, index) => 
                <motion.div 
                  key = {index}
                  className={`text-purple-700 font-bold px-4 py-1 text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] bg-purple-100 rounded-lg`}
                  variants={fadeInAnimationVariants}
                  initial ="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom = {index}>
                    {skill}
                </motion.div>
              )}
          </div>
        </div>
    )
}
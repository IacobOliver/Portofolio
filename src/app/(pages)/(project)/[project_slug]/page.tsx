"use client"
import { projects } from '@/app/_utils/ProjectData'
import { Carousel } from "../../../_utils/MaterialTailwind"
import React, { useRef } from 'react'
import Header from '@/app/_components/Header'
import { Lora, Ultra } from 'next/font/google'
import Image from 'next/image'
import { IconButton } from '@material-tailwind/react'
import Footer from '@/app/_components/Footer'
import SlideLoading from '@/app/_components/SlideLoading'

import { useScroll, useTransform, motion } from "framer-motion"
import TextParalax from './TextParalax'


const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

const ultra = Ultra({
  weight: '400',
  subsets: ['latin'],
})

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

export default function VisitProject({ params }: { params: any }) {
  let project = projects.filter(project => project.slug == params.project_slug)[0]

  const Intro = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

    return (
      <div className='h-screen overflow-hidden pt-[120px] bg-black'>
        <motion.div style={{ y }} className='relative h-full'>
          <Image className='!h-fit' src={project.images[0]} fill alt="image" />
        </motion.div>
      </div>
    )
  }

  const Description = () => {

    return (
      <div className='grid grid-cols-5 gap-20  bg-black text-purple-100 pb-40 px-8 sm:px-20'>

        <div id='col1' className='col-span-2 flex flex-col items-start justify-center'>
          <p className={`mb-3 tracking-wide text-lg md:text-3xl ${ultra.className}`}>About the project</p>
          <p className={`text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] leading-snug text-purple-100 ${lora.className}`}>
            {project.description}
          </p>

          <div id="moreAboutProjectButtons" className={`flex justify-center items-center py-10 gap-10 font-bold ${lora.className}`}>
            {project?.gitHubLink != "#" ?
              <a target="_blank" href={`${project.gitHubLink}`} className="select-none rounded-lg bg-purple-100 tracking-wider py-3 px-6 text-center align-middle text-xl font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ">To GitHub Project</a>
              :
              <p className='gradientText text-2xl font-bold'>CONFIDENTIAL REPO</p>
            }

            {project?.deployLink != "#" &&
              <a target="_blank" href={`${project.deployLink}`} className="select-none rounded-lg bg-purple-100 tracking-wider py-3 px-6 text-center align-middle text-xl font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ">See Live</a>
            }

          </div>
        </div>

        <div id='col2' className='flex flex-col col-span-3'>
          <Carousel key={101} placeholder={""} className="rounded-xl w-full h-auto"
            loop={true}
            autoplay={true}
            autoplayDelay={3000}
            navigation={() => <></>}
            prevArrow={({ handlePrev }) => (
              <IconButton
                key={99}
                placeholder=""
                variant="text"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4 bg-purple-300 bg-opacity-50 hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                key={98}
                placeholder=""
                variant="text"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-purple-300 bg-opacity-50 hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}>
            {
              project.images.map((image, index) =>
                <Image
                  key={index}
                  width={1000}
                  height={10}
                  src={image}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              )
            }
          </Carousel>

          <div className='w-full flex flex-wrap gap-3 justify-center mt-10'>
            {project.skills.map((skill, index) =>
              <motion.div
                key={index}
                className={`text-purple-600 font-bold px-4 py-1 text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] bg-purple-100 rounded-lg`}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}>
                {skill}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    )
  }



  return (
    <main>
      <Header />
      <SlideLoading />
      <Intro />
      <TextParalax text={project.name.replace(/\s+/g, '')} />
      <Description />
      <Footer />
    </main>

  );
}

"use client"
import { projects } from '@/app/_utils/ProjectData'
import { Carousel } from "../../../_utils/MaterialTailwind"
import React from 'react'
import Header from '@/app/_components/Header'
import { Lora, Ultra } from 'next/font/google'
import Image from 'next/image'
import { IconButton } from '@material-tailwind/react'
import Footer from '@/app/_components/Footer'
import SlideLoading from '@/app/_components/SlideLoading'


const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

const ultra = Ultra({
  weight: '400',
  subsets: ['latin'],
})

export default function VisitProject({ params }: { params: any }) {
  let project = projects.filter(project => project.slug == params.project_slug)[0]

  //console.log(params)
  return (
    <div className={`flex flex-col items-center min-h-screen w-screen gap-20 bg-black text-purple-100 ${lora.className}  px-8 sm:px-20`}>
      <Header />
      <SlideLoading/>
      <h1 className={`text-[4rem] mb-10 pt-[120px] text-center  ${ultra.className} `}>{project.name}</h1>

      <div id="carrouselAndDescription" className='min-w-full flex flex-col items-center mt-10 '>
        <Carousel key={101} placeholder={""} className="rounded-xl w-full"
          loop={true}
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

        <div key={102} id="description" className={`w-full mt-16  text-2xl ${lora.className}`}>
          {project.description}
        </div>
      </div>

      <div className={`flex justify-center items-center h-full py-20 gap-10  ${lora.className}`}>
        {project?.gitHubLink != "#" ?
          <a target="_blank" href={`${project.gitHubLink}`} className="select-none rounded-lg bg-purple-100 tracking-wider py-3 px-6 text-center align-middle text-xl font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">To GitHub Project</a>
          :
          <p className='gradientText text-2xl font-bold'>CONFIDENTIAL REPO</p>
        }

        {project?.deployLink != "#" &&
          <a target="_blank" href={`${project.deployLink}`} className="select-none rounded-lg bg-purple-100 tracking-wider py-3 px-6 text-center align-middle text-xl font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">See Live</a>
        }


        <button onClick={() => window.history.back()} className="select-none rounded-lg bg-purple-100 py-3 px-6 text-center align-middle text-xl tracking-wider font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >Back</button>

      </div>

      <Footer />
    </div>
  )
}

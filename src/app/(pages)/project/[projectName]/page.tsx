"use client"
import { projects } from '@/app/_utils/ProjectData'
//import { Carousel } from '@material-tailwind/react'
import { Carousel } from "../../../_utils/MaterialTailwind"
import React from 'react'
import Header from '@/app/_components/Header'
import { Lora, Ultra } from 'next/font/google'
import Image from 'next/image'


const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

const ultra = Ultra({
  weight: '400',
  subsets: ['latin'],
})

export default function VisitProject({ params }: { params: any }) {
  let project = projects.filter(project => project.name == params.projectName)[0]

  console.log(params)
  return (
    <div className={`min-h-screen min-w-screen gap-20 bg-black text-purple-100 ${lora.className}`}>
      <Header />
      <h1 className={`text-[4rem]  text-center ${ultra.className} `}>{project.name}</h1>

      <div id="carrouselAndDescription" className='min-w-full flex items-center mt-10'>
        <Carousel placeholder={""} className="rounded-xl w-1/2">
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
        <div id="description" className={`w-1/2 px-10 text-xl ${lora.className}`}>
          {project.description}
        </div>
      </div>

      <div className={`flex items-center h-full mt-20 gap-10 ${lora.className}`}>
        <a target="_blank" href={`${project.gitHubLink}`} className='p-5 '>To GitHub Project</a>
        <a className=' p-5' href="/">Back</a>
      </div>
    </div>
  )
}

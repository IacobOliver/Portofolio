"use client"
import { projects } from '@/app/_utils/ProjectData'
import { Lora, Ultra } from 'next/font/google'
import React from 'react'
import ProjectCard from './ProjectCard'

const lora = Lora({
    weight: '400',
    subsets: ['latin'],
  })

  const ultra = Ultra({
    weight: '400',
    subsets: ['latin'],
  })

export default function ListProjects() {
  return (
    <div className=' w-full px-20 mb-20 mt-14'>
      <h1 className={`${ultra.className} text-[3rem] lg:text-[4rem] gradientText`} >My Projects</h1>
      <div className={`${lora.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center  w-full mt-16 gap-14`}>
        {
            projects.map((project, index) => <ProjectCard key={index} project={project} />)
        }
      </div>
    </div>
  )
}

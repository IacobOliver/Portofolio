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
    <div className=' w-full px-20'>
      <h1 className={`${ultra.className} text-[4rem] gradientText`} >My Projects</h1>
      <div className={`${lora.className} flex flex-row flex-wrap w-full mt-16 gap-14`}>
        {
            projects.map((project, index) => <ProjectCard key={index} project={project} />)
        }
      </div>
    </div>
  )
}

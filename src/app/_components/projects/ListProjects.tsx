"use client"
import { projects } from '@/app/_utils/ProjectData'
import { Lora, Ultra } from 'next/font/google'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardV3 from './ProjectCardV3'

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
    <div className=' w-full mb-20 mt-14'>
      <div className={`${lora.className} grid grid-cols-1 lg:grid-cols-2 justify-items-stretch  w-full mt-16 gap-14`}>
        {
            projects.map((project, index) => <ProjectCardV3 key={index} project={project} />)
        }
      </div>
    </div>
  )
}

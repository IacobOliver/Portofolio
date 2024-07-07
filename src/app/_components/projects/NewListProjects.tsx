'use client'
import { Lora, Ultra } from 'next/font/google'
import NewProjectCard from './NewProjecCard'
import { projects } from '@/app/_utils/ProjectData'

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

const ultra = Ultra({
  weight: '400',
  subsets: ['latin'],
})

export default function NewListProjects() {

  return (
    <main className="h-auto w-full  flex flex-col  text-purple-100">
          {
            projects.map( (project, index) => {
              return <NewProjectCard key={index} project={project}/>
            })
          }
    </main>
  )
}

'use client'
import NewProjectCard from './NewProjecCard'
import { projects } from '@/app/_utils/ProjectData'

export default function NewListProjects() {

 


  return (
    <main className="h-auto w-full  flex flex-col  text-purple-100">
    
        <p>Featured Work</p>
          {
            projects.map( project => {
              return <NewProjectCard project={project}/>
            })
          }
      
    </main>
  )
}

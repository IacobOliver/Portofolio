import { projects } from '@/app/_utils/ProjectData'
import React from 'react'

export default function VisitProject({params} : {params : any}) {

  console.log(params)
  return (
    <div className='min-h-screen min-w-screen gap-20'>
      <h1>This page is under construction .. sorry ... it will be done assap</h1>
      <p>But here you can acces the project in GitHub</p>

    <div className='flex items-center bg-blue-900 h-full mt-20 gap-10'>
      <a target="_blank" href={`${projects.filter(project => project.name == params.projectName)[0].gitHubLink}`} className='p-5 bg-purple-100'>To GitHub Project</a>
      <a className=' bg-blue-500 p-5' href="/">Back</a>
      </div>
    </div>
  )
}

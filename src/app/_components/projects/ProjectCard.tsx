import { Project } from '@/app/_utils/ProjectData'
import Image from 'next/image'
import React from 'react'

export default function ProjectCard({ project }: { project: Project }) {

    return (
        <div id="principalContainer" className="relative flex min-w-80 max-w-[400px] flex-col rounded-xl bg-[#18181b] bg-clip-border text-purple-100 shadow-md !z-0">
            <div className="relative mx-4 -mt-6 h-[200px] overflow-hidden rounded-xl ">
                <Image className='!w-full !h-full' width={700} height={10} alt={project.name} src={project.images[0]} />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {project.name}
                </h5>
                <p className=" font-sans text-[0.7rem] md:text-[1.1rem] xl:text-[1.3rem] font-light leading-relaxed  antialiased line-clamp-3   ">
                    {project.description}
                </p>
            </div>
            <div className="p-6 pt-0 flex justify-around text-[0.5rem] md:text-[0.8rem] xl:text-[1rem] text-purple-600 font-bold uppercase" >
                <a data-ripple-light="true" href={`project/${project.slug}`} className=" flex items-center  select-none rounded-lg bg-purple-100 py-1 md:py-2 px-2.5 md:px-5 text-center   shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ">
                    Read More
                </a>
                {project.deployLink != "#" &&
                    <a data-ripple-light="true" target="_blank" href={project.deployLink} className="select-none rounded-lg bg-purple-100 py-1 md:py-2 px-2.5 md:px-5 text-center    shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ">
                        Visit Live
                    </a>
                }
            </div>
        </div>
    )
}

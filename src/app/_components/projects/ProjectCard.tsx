import { Project } from '@/app/_utils/ProjectData'
import Image from 'next/image'
import React from 'react'

export default function ProjectCard({ project }: { project: Project }) {

    return (
        <div id="principalContainer" className="relative flex w-80 flex-col rounded-xl bg-[#18181b] bg-clip-border text-purple-100 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl ">
                <Image className='!w-full !h-full' width={700} height={10} alt={project.name} src={project.images[0]} />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {project.name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                </p>
            </div>
            <div className="p-6 pt-0 flex justify-around">
                <a data-ripple-light="true" href={`project/${project.name}`} className="select-none rounded-lg bg-purple-100 py-2 px-5 text-center align-middle text-sm font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                </a>
                {  project.deployLink != "#" &&
                    <a data-ripple-light="true" target="_blank" href={`project/${project.name}`} className="select-none rounded-lg bg-purple-100 py-2 px-5 text-center align-middle text-sm font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Visit Live
                    </a>
                }
            </div>
        </div>
    )
}

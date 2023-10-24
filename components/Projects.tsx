"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionView } from '@/lib/hooks'

const Projects = () => {

    const { ref } = useSectionView("Projects",0.5)

  return (
    <section ref={ref} id='projects' className='scroll-m-28 mb-28'>
        <SectionHeading>
            My Projects
        </SectionHeading>
        <div>
            {projectsData.map((project, index)=>(
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

export default Projects




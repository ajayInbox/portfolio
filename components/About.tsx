"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionView } from '@/lib/hooks'

const About = () => {

  const { ref } = useSectionView("About")

  return (
    <motion.section 
      ref={ref}    
      id='about'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{
            delay:0.175
        }}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28'>
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            After graduating with a degree in{" "}
            <span className="font-medium">Bachelor of Engineering in Field of Mechanical Engineering</span>, I decided to pursue my
            passion for programming. I enrolled in some courses on Python programming on Coursera and started{" "}
            <span className="font-medium">my coding journey</span>.{" "} My coding journey paced up when I joined Infosys Limited as Systems Engineer where I went through 6 months of training in Java,Mysql and spring boot at Global Education Center Mysore.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
            React, Java, spring boot, and MySql
            </span>
            . I am also familiar with TypeScript and Nextjs. I am always looking to
            learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">new challenges</span> as a software
            developer.
      </p>

    </motion.section>
  )
}

export default About
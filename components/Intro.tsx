"use client"

import Image from 'next/image'
import React from 'react'
import TheCoder from "@/public/TheCoder.png"
import {motion} from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionView } from '@/lib/hooks'

const Intro = () => {

    const { ref } = useSectionView("Home",0.5)
    
  return (
    <section id='home' ref={ref} className='mb-28 text-center max-w-[50rem] sm:mb-0 scroll-m-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{type:"tween", duration:0.2}}>
                    <Image src={TheCoder}
                    width={192} height={192} quality={95} priority alt='img'
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                </motion.div>
                
                <motion.span className='absolute bottom-0 right-0 text-3xl'
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:"spring",
                        stiffness:125,
                        delay:0.1,
                        duration:0.7
                    }}>
                    👋
                </motion.span>
            </div>
        </div>
        <motion.p 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
            <span className='font-bold'>{`Hello, I'm Ajay`}.</span>{` I'm a `}<span className='font-bold'>Full-Stack Developer</span> with 2 years of experince. I enjoy building web applications. My focus is React{" "}(Nextjs).
        </motion.p>
        <motion.div 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.1}}
            className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'>
            <Link href="#contact" 
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer'>
                Contact me here
                <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>
            <a 
                href='/cv.pdf' download
                className='bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10'>
                Download CV
                <HiDownload className='opacity-70 group-hover:translate-y-1 transition'/>
            </a>
            <a 
                href='https://linkedin.com' target='_blank'
                className='bg-white p-4 text-gray-800 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60'>
                <BsLinkedin className='opacity-70'/>
            </a>
            <a 
                href='https://github.com' target='_blank'
                className='bg-white p-4 text-gray-800 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60'>
                <FaGithubSquare className='opacity-70'/>
            </a>
        </motion.div>
    </section>
  )
}

export default Intro
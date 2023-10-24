'use client'
import Container from './Container'
import Image from 'next/image'
import bannerImg from '@/assest/banner.png'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import { typing } from '@/constants/data'

const Banner = () => {
  return (
    <section>
        <div className="flex   justify-around text-zinc-100  ">
            <div className=' bg-zinc-900 w-[70%] h-screen flex flex-col items-start  '>
               <div className='w-1/2 ml-10 md:ml-[100px] flex flex-col  gap-4 md:mt-28 '>
               <p>Hello!</p>
                <h2 className=' font-serif text-5xl font-bold'>I&apos;m <span className='text-mainColor'>Akhi</span></h2>
                {/* typewritter start here */}
                <div className='flex gap-1 text-xl font-semibold'>
                    <p>I&apos;m a</p>
                    <p>
                                <Typewriter
                        words={typing}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={2000}
                       
                    />
                    </p>
                </div>
                {/* typewritter end here */}
                <p className=''>I&apos;m a dedicated Full Stack Web Devloper.I have accomplish my skill in React, Next.js, Node,js. MongoDB to
                  creating dynamic, user-friendly and effieient web applications</p>
                <Link href={"/resume.pdf"} target='_blank'>
                <button className='bg-gradient-to-r from-mainColor to-zinc-200 text-zinc-800 p-3  hover:bg-zinc-100 hover:text-zinc-800 duration-200 font-bold '>Hire Me</button>
                </Link>
               </div>
            </div>
            <div className='bg-gradient-to-b  from-zinc-800 to-mainColor w-[30%] h-screen'>
                
                <div className='w-[10rem] bg-gradient-to-r from-zinc-900 to-zinc-900 aspect-square md:w-[35rem]  absolute rounded-full top-[60%] left-[70%] translate-x-[-50%] translate-y-[-50%] '></div>
                <div className= 'w-[8rem] bg-white aspect-square md:w-[28rem]  absolute rounded-full top-[60%] left-[70%] translate-x-[-50%] translate-y-[-50%] shadow md:shadow-3xl shadow-white '>
                               <Image src={bannerImg} alt={"banner Image"}
                className=' rounded-full w-full object-full'/>
                                                
                </div>
            </div>
        </div>
      
    </section>
    
  )
}

export default Banner
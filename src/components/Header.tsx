'use client'

import Image from 'next/image'
import Link from 'next/link'
import { navigation } from '@/constants/data'
import logo from "@/assest/logo.png"
import { Menu ,X} from 'lucide-react'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Header = () => {
    const [show, setShow]=useState(false)
    
  return (
   <div className='w-full bg-zinc-900 h-20  text-white sticky top-0 z-50'>
    <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between relative'>
        <Link href={"/"}>
        <Image src={logo} alt='logo image' className='w-28'/>
        </Link>
        <ul className=' hidden md:flex items-center justify-center gap-6'>
          {
            navigation.map((item)=>(
                <Link key={item.title} href={item.href} target={item.target}>
                <li className='font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-white to to-mainColor  hover:text-mainColor duration-200 '>{item.title}</li>
                </Link>
            ))
          }
        </ul>
        <div onClick={()=>setShow(!show)} className='inline-flex md:hidden '>{
            show ? <X/>:<Menu/>
        }
        </div>
        {
            show &&(
                <motion.ul
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                className='flex flex-col items-center justify-center md:hidden gap-5 bg-zinc-100 absolute top-20 right-0 p-5 z-50'>
                {
                  navigation.map((item)=>(
                      
                      <li key={item.title} 
                     
                      className='font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-black to to-mainColor  hover:text-black duration-200  '>{item.title}</li>
                      
                  ))
                }
              </motion.ul>
            )
           
        }
    </div>
   </div>
  )
}

export default Header
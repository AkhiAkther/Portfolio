import { social } from '@/constants/data'
import React from 'react'
import { navigation } from '@/constants/data'
import Link from 'next/link'
import Container from './Container'

const Footer = () => {
  return (
    <div className=' text-white py-5'>
      <div className='flex flex-col items-center justify-center gap-3 '>
      <p className=' underline underline-offset-8 pb-2'>Follow Me</p>
        <div className='flex  items-center justify-center gap-5'>
             {
                    social.map((item)=>(
                        <div key={item.title} className='flex flex-col items-center justify-center gap-2'>
                        <p className='flex items-center justify-center bg-gradient-to-r from-mainColor to-zinc-600 text-black rounded-full w-8 h-8 hover:text-white duration-200'>{<item.icon/>}</p>
                       
                        </div>
                    ))
                }
            
        </div>
       
      </div>
    </div>
    
  )
}

export default Footer
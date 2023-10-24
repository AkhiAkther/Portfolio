import React from 'react'
import Container from './Container'
import Title from './Title'
import { project } from '@/constants/data'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
   <section id='myproject'>
    <Container>
        <Title title='My Project'></Title>

        <hr className='hrStyle'></hr>
        <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {
          project.map((item)=>(
            <Link key={item.title} href={item.href} target='_blank'>
            <div className='border border-zinc-100'>
               <Image src={item.img} alt='study lab image'
               className='h-52'
               />
               <p className='text-center font-bold'>{item.title}</p>
             </div>
            </Link>
          ))
        }
         
        </div>
    </Container>
   </section>
  )
}

export default Project
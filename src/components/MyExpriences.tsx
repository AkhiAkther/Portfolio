import React from 'react'
import Container from './Container'
import Title from './Title'
import { expriences } from '@/constants/data'
import Image from 'next/image'

const MyExpriences = () => {
  return (
    <section>
        <Container>
            <Title title='My Expriences'></Title>
            <hr className='hrStyle'></hr>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {
                expriences.map((item)=>(
                    <div key={item.company} className='flex items-center gap-3  p-5'>
                      <Image src={item.img} alt='company image' className='w-16 h-16 rounded-full'/>
                     <div>
                     <p className='text-xl font-bold'>{item.company}</p> 
                      <p className='texl-lg font-semibold'>{item.title}</p>
                     
                      <p>{item.duration}</p>
                     </div>
                    </div>
                                     
                ))
              }
            </div>
        </Container>
      
    </section>
  )
}

export default MyExpriences
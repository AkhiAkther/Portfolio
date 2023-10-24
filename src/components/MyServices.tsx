import React from 'react'
import Container from './Container'
import Title from './Title'
import { serviceDetails } from '@/constants/data'

const MyServices = () => {
  return (
   <section id='myservices'>
    <Container className=''>
        <Title title='My Services'></Title>
        <hr className='hrStyle'></hr>
       <div className='grid grid-col-1 md:grid-col-2 xl:grid-cols-3 gap-10 mt-10 '>
       {
            serviceDetails.map((item)=>(
                <div key={item.title} className='hover:border-4 hover:border-zinc-600 p-5 shadow-md shadow-zinc-700 bg-zinc-800 '>
                    <div className='flex items-center gap-2 mb-4 duration-200'>
                        <p className='text-mainColor '>{<item.icon/>}</p>
                        <p className='text-lg font-bold'>{item.title}</p>
                    </div>
                    <p>{item.description}</p>
                </div>
                            ))
        }
       </div>
       
    </Container>
    
   </section>
  )
}

export default MyServices
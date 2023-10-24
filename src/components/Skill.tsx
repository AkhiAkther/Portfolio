import React from 'react'
import Container from './Container'
import Title from './Title'
import { skills } from '@/constants/data'

const Skill = () => {
  return (
    <Container>
        <Title title='Skills'></Title>
        <hr className='hrStyle'></hr>
        <div className=' grid  grid-cols-3 md:grid-cols-6 items-center justify-center gap-5'>
          {
            skills.map((item)=>(
                <div key={item.title}>
                    <p className='text-lg font-semibold border border-zinc-700 p-3 flex justify-center hover:bg-zinc-800'>{item.title}</p>
                </div>
            ))
          }
        </div>
    </Container>
  )
}

export default Skill
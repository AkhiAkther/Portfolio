import React from 'react'
import Container from './Container'
import Title from './Title'
import Link from 'next/link'

const Contact = () => {
  return (
   <Container className='flex flex-col gap-3 items-center justify-center'>
    <h2 className='text-3xl font-bold'>Let&apos;s work together</h2>
    <p>If you have any project or opportunity Contact with me</p>
  <Link href={"/contact"}>
  <button className='bg-gradient-to-r from-mainColor to-white p-5 rounded-md text-black font-bold text-lg hover:bg-gradient-to-r hover:from-white hover:to-mainColor'>Contact  Me</button>
  </Link>

   </Container>
  )
}

export default Contact
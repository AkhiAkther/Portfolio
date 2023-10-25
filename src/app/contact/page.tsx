import Contact from '@/components/Contact'
import Container from '@/components/Container'
import Title from '@/components/Title'
import { contact, social } from '@/constants/data'

import React from 'react'

const Contactpage = () => {
  return (
    <Container className=' flex flex-col items-center justify-center  '>
    <Title title="My Contact" ></Title>
    <hr className='hrStyle' ></hr>
    <div className='flex flex-col md:flex-row items-center justify-center  w-full my-20 gap-8'>
      
       <div className='grid grid-cols-2 md:grid-cols-1 pb-5  gap-10 '>
            {
               contact.map((item)=>(
                <div key={item.title} className='  flex flex-col gap-3'>
                    <p className='text-mainColor bg-zinc-100 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-mainColor hover:text-zinc-100 duration-200'>{<item.icon/>}</p>
                    <p className='underline underline-offset-8  text-mainColor font-bold text-xl'>{item.title}</p>
                    <p>{item.description}</p>
                </div>
               ))
            }
             <div className=''>
        <h2 className='font-bold text-xl text-mainColor underline underline-offset-8'>Reach Me</h2>
        <div className='flex  gap-2 py-5'>
            {
              social.map((item)=>(
                <p key={item.title} className='text-mainColor w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-mainColor hover:text-zinc-100'>{<item.icon/>}</p>
              ))  
            }
        </div>
       </div>
        </div>
       
      
       
        <div className='w-9/12 flex flex-col  justify-center gap-3  auto p-10 border border-zinc-600'>
    
  
    <p className=''>Name  </p>
    <input type='text' placeholder='Enter your Name' className='p-3 text-black'/>
    <p>Email</p>
      <input type='email' placeholder='Enter your email' className='p-3 text-black'/>
    
      <p>massage</p>
      <textarea className=' w-46 h-36 text-black'></textarea>
 
      
     
     <button className='bg-mainColor p-2 w-full hover:bg-white hover:text-black duration-200'>Send Massage</button>
     
     
     </div>
     </div>
    
   
</Container>
  )
}

export default Contactpage
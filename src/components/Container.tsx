import React from 'react'
interface Props {
    children:React.ReactElement | React.ReactElement[]
    className?:string
}
const Container = ({children,className}:Props) => {
  return (
    <div className={`max-w-screen-xl mx-auto  text-zinc-100  px-4 xl:px-0 py-20 border-b-2 border-b-zinc-700 ${className}`}>{children}</div>
  )
}

export default Container
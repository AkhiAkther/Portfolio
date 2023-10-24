type Props ={
    title:string
    className?:string
}

const Title = ({title, className, }:Props) => {
  return (
    <div className={`text-3xl font-bold  ${className}`}>{title}
    
    </div>
  )
}

export default Title
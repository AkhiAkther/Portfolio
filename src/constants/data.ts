import{ Facebook, Twitter,Linkedin, LayoutDashboard,SquareCode,SquareDashedBottomCode,FileJson,DatabaseZap,ShoppingBag,Phone,MapPin,Mail, Github} from 'lucide-react'
import Freelancer from '@/assest/freelancer.png'
import xyz from '@/assest/xyz.png'
import fiver from '@/assest/fiver.png'
import studyLabImg from '@/assest/project/portfolio-1.png'
import DonationImg from '@/assest/project/portfolio-2.png'
import WorldcupImg from '@/assest/project/portfolio-3.png'
export const navigation=[
    {title:"Home", href:"/"},
   
    {title:"Services", href:"/services"},
    {title:"Project", href:"/project"},
    {title:"Resume", href:"/resume.pdf", target:"_blank"},
    {title:"Contact", href:"/contact"}
]
export const social=[
    {title:"Facebook", href:"", icon:Facebook},
    {title:"Twitter", href:"", icon:Twitter},
    {title:"Linkedin", href:"", icon:Linkedin},
    {title:"Github", href:"", icon:Github},
    
   
]
export const typing=['Full Stack Developer','Web Developer', 'MERN Stack Developer'

]
export const serviceDetails =[
    {title:"Web Design",
    description:"I'm creating intuitive and visually appealing user interfaces and Experience to enhance user interaction and engagemen",
    icon:LayoutDashboard
},
    {title:"Full Stack Development",
    description:"My  full-stack development expertise ensures a seamless end-to-end solution. Custom website and web application development from front-end to back-end.",
    icon:SquareCode
},
    {title:"Front-end Development",
    description:" Creating interactive and responsive user interfaces using HTML, CSS, and JavaScript. i'm providing a  captivating user experience, driving engagement and conversions.",
    icon:SquareDashedBottomCode
},
    {title:"Back-end Development",
    description:"I'm creating efficient back-end development guarantees the stability and scalability of your web applications. Building robust server-side applications and databases.",
    icon:FileJson
},
    {title:"MERN Stack Development",
    description:"I'm providing dynamic web application using  React,Node.js ,Express.js and MongoDB to build user-friendly back-end.",
    icon:DatabaseZap
},
    {title:"E-Commerce Project",
    description:"I'm Creating interactive E-Commerce project ,Developing online stores with payment gateways and product management.",
    icon:ShoppingBag
},
]
export const expriences=[
    {title:" Web Developer", href:"",company:"Freelancer",position:"Intern",duration:"January-2022-June-2022",img:Freelancer},
    {title:" Frontend Developer", href:"",company:"XYZ.com",position:"Intern",duration:"July-2022-January-2023",img:xyz},
    {title:" MERN Stack Developer", href:"",company:"Fiver",position:"Intern",duration:"February-2023-June-2022",img:fiver},
   
    
   
]
export const project =[
    {title:"Study-Lab Application", href:"https://study-lab-website.vercel.app/", img:studyLabImg},
    {title:"Donation Website", href:"https://study-lab-website-d81w.vercel.app/", img:DonationImg},
    {title:"World-Cup", href:"https://world-cup-beta.vercel.app/", img:WorldcupImg},
    
   
]
export const skills =[
    
    {title:"Next js"}, {title:"React js"}, {title:"MongoDB"}, {title:"Express js"}, {title:"Typescript"}, {title:"Javascript"},  {title:"Node js"},
    {title:"Tailwind"}, {title:"HTML5"}, {title:"CSS3"}, {title:"Github"},{title:"Vercel"},
]
export const contact=[
    {title:"Phone Number",icon:Phone, description:"01734781710"},
    {title:"E-mail",icon:Mail, description:"akhiakther0022@gmail.com"},
    {title:"Address",icon:MapPin, description:"Bonosri-Block-8,Road-E Dhaka, Bangladesh"}
]
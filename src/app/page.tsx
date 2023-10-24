import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import MyExpriences from '@/components/MyExpriences'
import MyServices from '@/components/MyServices'
import Project from '@/components/Project'
import Skill from '@/components/Skill'
import Image from 'next/image'

export default function Home() {
  return (
  <main>
   <Banner/>
   <AboutMe/>
   <MyServices/>
   <MyExpriences/>
   <Project/>
   <Skill/>
   <Contact/>
  </main>
  )
}

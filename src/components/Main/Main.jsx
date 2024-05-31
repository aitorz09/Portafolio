import './index.css'
import { AboutMe } from '../AboutMe/AboutMe.jsx'
import { Bootcamp } from '../Bootcamp/Bootcamp.jsx'
import { Mywork } from '../MyWork/Mywork.jsx'
import { Reveal } from '../Reveal/Reveal.jsx'

export const Main = () => {
  return (
    <main  className="main" style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw"}}>
     <Reveal>
      <AboutMe/>
     </Reveal>
     <Reveal>
      <Bootcamp/>
     </Reveal>
     <Reveal>
      <Mywork/>
     </Reveal>
    </main> 
  )
}

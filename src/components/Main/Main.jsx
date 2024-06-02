import './index.css'
import { AboutMe } from '../AboutMe/AboutMe.jsx'
import { Bootcamp } from '../Bootcamp/Bootcamp.jsx'
import { Mywork } from '../MyWork/Mywork.jsx'
import { Reveal } from '../Reveal/Reveal.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { ContactMe } from '../ContactME/ContactMe.jsx'

export const Main = () => {
  return (
    <main  className="main">
     
      <AboutMe/>
      <Mywork/>
      <Bootcamp/>
      <ContactMe/>
      <Footer/>
    </main> 
  )
}

import './index.css'
import { AboutMe } from '../AboutMe/AboutMe.jsx'
import { Bootcamp } from '../Bootcamp/Bootcamp.jsx'
import { Mywork } from '../MyWork/Mywork.jsx'

export const Main = () => {
  return (
    <main  className="main">
      <AboutMe/>
      <Bootcamp/>
      <Mywork/>
    </main> 
  )
}

import { Header } from "../components/Header/Header.jsx"
import { Reveal } from "../components/Reveal/Reveal.jsx"


export const MainLayout = ({children}) => {
  return (
   
   <>
    <Header/>
    {children}
   </>
   
  )
}

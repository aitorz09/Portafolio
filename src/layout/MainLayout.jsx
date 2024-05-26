import { Header } from "../components/Header/Header.jsx"


export const MainLayout = ({children}) => {
  return (
   
   <>
    <Header/>
    {children}
   </>
   
  )
}

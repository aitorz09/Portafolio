
import './App.css'
import { MainLayout } from './layout/MainLayout.jsx'
import { Main } from './components/Main/Main.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'



function App() {

  return (
  
      <MainLayout>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </MainLayout>
  
    
  )
}

export default App


import './App.css'
import { MainLayout } from './layout/MainLayout.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import { Main } from './components/Main/Main.jsx'


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

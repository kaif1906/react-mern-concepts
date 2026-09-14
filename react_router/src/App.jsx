import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Componet/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App

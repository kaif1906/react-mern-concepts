import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Componet/Home.jsx'
import Contact from './Componet/Contact.jsx'
import About from './Componet/About.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
 
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/about",
    element : <About/>
  }
  ]
  }
])

createRoot(document.getElementById('root')).render(

  

  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

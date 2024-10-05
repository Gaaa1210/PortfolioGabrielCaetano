import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import MainContent from './components/MainContent.jsx'
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Projetos from './pages/Projetos.jsx'
import Contato from './pages/Contato.jsx'
import Sobre from './pages/Sobre.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/projetos",
        element: <Projetos/>
      },
      {
        path: "/contato",
        element: <Contato/>
      },
      {
        path: "/sobre",
        element: <Sobre/>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

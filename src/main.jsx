import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projetos from './pages/Projetos.jsx'
import Contato from './pages/Contato.jsx'
import Sobre from './pages/Sobre.jsx'
import PageNotFound from './pages/PageNotFound.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageNotFound/>,
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

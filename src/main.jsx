import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Casas from './pages/Casas'
import Contact from './pages/Contact'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre",
        element: <About />
      },
      {
        path: "/casas",
        element: <Casas />
      },
      {
        path: "/contato",
        element: <Contact />
      }, 
    ]

  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

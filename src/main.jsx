import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Dashboard from './pages/Dashboard/Dashboard'


const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product/",
        element: <Product></Product>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
    ]

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}  ></RouterProvider>
  </React.StrictMode>,
)

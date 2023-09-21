import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/Home';
import Product from '../Product/Product';
import Dashboard from '../Dashboard/Dashboard';

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
      // },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      }
    ]
  }
])

export default myCreatedRouter;
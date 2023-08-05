import React, { Children } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/root/RootLayout';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import './App.css';

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/:id',
      element: <Product />
    }
  ]
}])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

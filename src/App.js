import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from './Components/Header'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Menu} from './Pages/mainmenu';
import AppLayout from './AppLayout.jsx';
import { Provider } from 'react-redux';
import {Cart} from './Components/Cart.jsx'
import {ContactUs} from './Components/ContactUs.jsx';
import { Checkout } from './Components/Checkout.jsx';
import { Orders } from './Components/Orders.jsx';

const router =createBrowserRouter([
  {
    element:<AppLayout />,
    children:[

      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/mainmenu',
        element: <Menu />,
        // loader: menuLoader,
        // errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },

      {path:'/contactus' ,element:<ContactUs />},

      {
        path: '/checkout',
        element: <Checkout />,
     
      },
      {
           path:'/orders',
           element:<Orders />
      }
    ]
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;

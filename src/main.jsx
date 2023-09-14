import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import NewClient from './pages/NewClient';
import Index, { loader as clientsLoader } from './pages';

// const router = createHashRouter([
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element: <Index />,
        loader: clientsLoader
      },
      {
        path:'/new/client',
        element: <NewClient />
      }
    ]
  }
]);

// const router = createHashRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'/tags',
//         element: <h1>Tag page</h1>
//       }
//     ]
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

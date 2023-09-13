import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello here's where the fun begins</h1>
  },
{
  path:'/tags',
  element: <h1>Tag page</h1>
}
]);

// const router = createHashRouter([
//   {
//     path: '/',
//     element: <h1>Hello here's where the fun begins</h1>
//   },
//   {
//     path:'/tags',
//     element: <h1>Tag page</h1>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

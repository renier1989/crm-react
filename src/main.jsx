import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import NewClient,{action as newClientAction} from './pages/NewClient';
import Index, { loader as clientsLoader } from './pages';
import ErrorPage from './components/ErrorPage';
import EditClient, {loader as editClientLoader, action as editClientAction} from './pages/EditClient';
import { action as deleteClientAction } from './components/ClientRow'
// const router = createHashRouter([
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage/>
      },
      {
        path:'/new/client',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage/>,
      },
      {
        path:'/client/:clientId/edit',
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/client/:clientId/delete',
        action: deleteClientAction,
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

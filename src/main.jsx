import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Post from './components/Post/Post.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children:[
      {
        path:'/about',
        element: <div>This is about page</div>
      },
      {
        path:'/post',
        element: <Post></Post>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'), 
      },
      {
        path:'post/:postId',
        element: <PostDetails/>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.postId}`)

      },
      {
        path:'/contact',
        element: <div>This is contact page</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

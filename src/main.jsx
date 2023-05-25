import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import de paginas para seguir com as rotas 
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Mod from './routes/Mod';

import "./style/index.css";
import { Login } from './components/Login';
import { AuthProvider } from './context/AuthProvider';



const router = createBrowserRouter([ // faz a criação das rotas de navegação das paginas .
  {
    element: <App />, children : [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/new",
        element: <NewPost/>,
      },
      {
        path: "/mod",
        element: <Mod/>, 
      },
      {
        path: "/login",
        element: <Login/>, 
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router= {router}/>
      </AuthProvider>
  </React.StrictMode>
)

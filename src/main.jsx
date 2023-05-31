
import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';


//import de paginas para seguir com as rotas 

import "./style/index.css";

import { AuthProvider } from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

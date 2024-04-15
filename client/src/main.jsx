import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ToastContainer} from "react-toastify"
import { AuthProvider } from './Store/auth.jsx'
import "react-toastify/dist/ReactToastify.css"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
      <ToastContainer 
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='colored'
      bodyClassName="toastBody"/>

    </React.StrictMode>,
  </AuthProvider>
)

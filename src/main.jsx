import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Router } from 'react-router-dom'

//fuckthis shit

const clientId = "243658490429-kp0knmppj9vuhiavhdudihj2u7n02h2k.apps.googleusercontent.com"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GoogleOAuthProvider clientId={clientId}>
   
   <App />
   
   </GoogleOAuthProvider>
   
   
  
  </React.StrictMode>,
)

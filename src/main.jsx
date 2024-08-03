import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Router } from 'react-router-dom'

//fuckthis shit

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GoogleOAuthProvider clientId={clientId}>
   
   <App />
   
   </GoogleOAuthProvider>
   
   
  
  </React.StrictMode>,
)

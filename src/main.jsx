import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Router } from 'react-router-dom'

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
const clientId = "243658490429-188fcjqrq0co0i389g4bpmn31rlkpfkf.apps.googleusercontent.com"
>>>>>>> c835b85 (second commit:)
=======

>>>>>>> f2e3b8e (final commit)

=======
>>>>>>> d274ee3 (first commit)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GoogleOAuthProvider clientId={clientId}>
   
   <App />
   
   </GoogleOAuthProvider>
   
   
  
  </React.StrictMode>,
)

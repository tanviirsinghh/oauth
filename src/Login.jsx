import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'

import { GoogleLogin } from "@react-oauth/google"
import axios from 'axios';
import { useEffect, useState } from 'react';

import { useAsyncError, useNavigate } from 'react-router-dom';



function Login() {
  const [user,setUser] = useState(null)
  const [token, setToken]= useState([])
  const [profile,setProfile] = useState(null)
  const navigate = useNavigate()
    
  const handleLoginSuccess = (Response) => {
   

    console.log('Login Success:', Response);
    setToken(Response.credential)
    setUser(Response)
    
   
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failure:', error);
  };

  useEffect(
    () => {
      
      console.log(token)
      
        if (token) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ token ]
);
  return (
    <>
    <h2>  login with google</h2>
   
     <GoogleLogin
       onSuccess={handleLoginSuccess} 
       onError={handleLoginFailure}>
      
       </GoogleLogin>
     {/* <googleLogout/> */}






   
    
    </>
  )
}

export default Login

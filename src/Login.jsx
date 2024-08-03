import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [ user, setUser ] = useState([]);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = useGoogleLogin({

    onSuccess: (codeResponse) => setUser(codeResponse),
    
   
    onError: (error) => console.log('Login Failed:', error)
    
});

  const handleLoginFailure = (error) => {
    console.error('Login Failure:', error);
  };

  useEffect(() => {

    if (user) {
  
      axios
      .get(`https:www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
          }
      })
        .then((res) => {
          setProfile(res.data);
          // You can navigate to another page or perform additional actions here
          // navigate('/profile'); // Example: navigate to profile page
        })
        .catch((err) => {
          console.error('Error fetching user info:', err);
        });
    }
  }, [user, navigate]);

  return (
    <>
      <h2>Login with Google</h2>
      <button onClick={() => handleLoginSuccess()}>Sign in with Google 🚀 </button>
      {profile && (
        <div>
          <h3>User Profile</h3>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <img src={profile.picture} alt="Profile" />
        </div>
      )}
    </>
  );
}

export default Login;
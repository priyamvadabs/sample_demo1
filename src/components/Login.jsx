import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register'); // Navigates to the Register page
  };

  return (
    <div>
      <h1>Login Page</h1>
      {/* Your login form here */}

      <p>Don't have an account?</p>
      <button onClick={goToRegister}>Go to Register</button>
    </div>
  );
}

export default Login;

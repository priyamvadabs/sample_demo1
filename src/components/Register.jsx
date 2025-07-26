import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // You can add registration logic here (form validation, API call, etc.)
    
    // After successful registration:
    navigate('/service'); // Navigates to Service page
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

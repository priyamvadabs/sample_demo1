// Contact.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Page</h2>
      <button onClick={goToLogin} style={{ padding: "10px 20px", marginTop: "10px" }}>
        Go to Login
      </button>
    </div>
  );
};

export default Contact;

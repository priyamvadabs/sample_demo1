// pages/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>About Postify</h1>
      <p>
        Welcome to <strong>Postify</strong>, your one-stop platform for sharing thoughts,
        experiences, and ideas through beautifully crafted blog posts. Whether you're a
        professional writer or someone who simply loves to express themselves, Postify
        empowers your voice.
      </p>

      <h2>Our Mission</h2>
      <p>
        We aim to build a community-driven blogging space where creativity flows freely.
        We believe every story matters, and we provide the tools to help you tell yours.
      </p>

      <h2>Meet the Team</h2>
      <ul>
        <li><strong>Hafza Shafi</strong> – Frontend Developer</li>
        <li>Team Member 1 – Authentication & Routing</li>
        <li>Team Member 2 – Blog Management</li>
        <li>Team Member 3 – UI & Layout</li>
      </ul>

      <button
        onClick={goToContact}
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        Contact Us
      </button>
    </div>
  );
}

export default About;

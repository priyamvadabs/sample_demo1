import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page.</p>
      <Link to="/about">
        <button>Go to About Page</button>
      </Link>
    </div>
  );
}

export default Home;
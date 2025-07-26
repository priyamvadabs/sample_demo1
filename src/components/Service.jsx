import React from 'react';

function Service() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <ul style={styles.list}>
        <li>🚀 Web Development</li>
        <li>📱 Mobile App Development</li>
        <li>☁️ Cloud Services</li>
        <li>🎨 UI/UX Design</li>
        <li>🔐 Cybersecurity Solutions</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.2rem',
    lineHeight: '2',
  }
};

export default Service;

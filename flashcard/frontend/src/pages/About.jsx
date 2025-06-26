import React from 'react';
import Navbar1 from '../component/Navbar1';

const About = () => {
  return (
    <div style={styles.page}>
      <video autoPlay muted loop style={styles.video}>
        <source src="/bg1.mp4" type="video/mp4" />
      </video>

      <div style={styles.overlay}>
        <Navbar1 />
        <br /><br /><br />
        <div style={styles.card}>
          <h1 style={styles.title}>About</h1>
          <p style={styles.text}>
            This Flashcard App is designed to help students prepare for core subjects like DAA, DBMS,
            OS, CO, WT, DS, and ITC with interactive, searchable question-answer cards.
            <br /><br />
            ✨ Features:
            <ul style={styles.ul}>
              <li>📚 Subject-wise categorized flashcards</li>
              <li>🔎 Instant search filtering</li>
              <li>🎞 Background video with a modern UI</li>
              <li>🔄 Flip cards with answers revealed on click</li>
            </ul>
            <br />
            Made with ❤️ using React.js.
          </p>

          {/* 🔗 Social Links */}
          <div style={styles.social}>
            <a href="https://github.com/Dharanya11/FALSHCARD-APP-PROJECT" target="_blank" rel="noopener noreferrer" style={styles.link}>🐱 GitHub</a>
            <a href="https://www.linkedin.com/in/dharanya-a-334877310/" target="_blank" rel="noopener noreferrer" style={styles.link}>💼 LinkedIn</a>
            <a href="mailto:dharanyaa.23it@kongu.edu" style={styles.link}>📧 Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    position: 'relative',
    minHeight: '100vh'
  },
  video: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  overlay: {
    position: 'relative',
    zIndex: 2,
    padding: '40px 20px',
    textAlign: 'center',
  },
  card: {
    maxWidth: '850px',
    margin: '0 auto',
    padding: '30px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    color: '#fff',
    textShadow: '1px 1px 3px #000'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px'
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8'
  },
  ul: {
    textAlign: 'left',
    margin: '10px auto',
    display: 'inline-block',
    fontSize: '1rem'
  },
  social: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  },
  link: {
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: '0.3s'
  }
};

export default About;

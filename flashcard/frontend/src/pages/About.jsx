import React from 'react';
import Navbar1 from '../component/Navbar1';

const About = () => {
  return (
    <div style={styles.page}>
      <video autoPlay muted loop style={styles.video}>
        <source src="/bg1.mp4" type="video/mp4" />
      </video>

      {/* Fixed Custom Navbar */}
      <div style={styles.navbarFixed}>
        <Navbar1 />
      </div>

      <div style={styles.overlay}>
        <div style={styles.card}>
          <h1 style={styles.title}>About</h1>
          <p style={styles.text}>
            This Flashcard App helps students prepare for core subjects like DAA, DBMS, OS, CO, WT, DS, and ITC
            using interactive, searchable question-answer cards.
          </p>

          {/* Enhanced Feature Cards */}
          <div style={styles.featuresContainer}>
            <h2 style={styles.featureHeading}>✨ Key Features</h2>
            <div style={styles.featuresGrid}>
              {features.map((item, idx) => (
                <div key={idx} style={styles.featureCard}>
                  <span style={styles.emoji}>{item.emoji}</span>
                  <p style={styles.featureText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

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

const features = [
  { emoji: '📚', text: 'Subject-wise categorized flashcards' },
  { emoji: '🔎', text: 'Real-time search filtering' },
  { emoji: '🎞️', text: 'Background video with elegant UI' },
  { emoji: '🔄', text: 'Interactive flip card animations' },
  { emoji: '🖼️', text: 'Responsive & mobile-friendly layout' },
  { emoji: '🌈', text: 'Custom styles per subject theme' },
];

const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    position: 'relative',
    minHeight: '100vh',
  },
  video: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  navbarFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 3,
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    padding: '10px 0',
  },
  overlay: {
    position: 'relative',
    zIndex: 2,
    padding: '120px 20px 40px',
    textAlign: 'center',
  },
  card: {
    maxWidth: '950px',
    margin: '0 auto',
    padding: '40px 30px',
    background: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '20px',
    backdropFilter: 'blur(14px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
    color: '#ffffff',
    textShadow: '1px 1px 4px #000',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.15rem',
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  featureHeading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  featuresContainer: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
    padding: '0 10px',
  },
  featureCard: {
    background: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    color: '#000',
    fontWeight: '600',
    fontSize: '1rem',
    transition: '0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
  },
  emoji: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  featureText: {
    margin: 0,
  },
  social: {
    marginTop: '35px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  link: {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '10px 22px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    border: '1px solid rgba(255,255,255,0.3)',
    transition: 'all 0.3s',
    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
  },
};

export default About;

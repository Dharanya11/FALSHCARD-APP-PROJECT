import React, { useState } from 'react';
import Navbar1 from '../component/Navbar1';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.page}>
      <video autoPlay muted loop style={styles.video}>
        <source src="/bg1.mp4" type="video/mp4" />
      </video>

      {/* Fixed Navbar */}
      <div style={styles.navbarFixed}>
        <Navbar1 />
      </div>

      <div style={styles.overlay}>
        <h1 style={styles.title}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>📩 Send Message</button>
        </form>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          📞 Mobile: +91 98765 43210 &nbsp; | &nbsp; 📧 Email: dharanyaa.23it@kongu.edu
        </p>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} Flashcard App
        </p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    position: 'relative',
    minHeight: '100vh',
    paddingBottom: '120px' // leave space for footer
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
  navbarFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 3,
    background: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
  },
  overlay: {
    position: 'relative',
    zIndex: 2,
    padding: '140px 20px 40px',
    textAlign: 'center',
    color: '#fff',
    textShadow: '1px 1px 5px #000'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '30px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(12px)',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
  },
  input: {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #fff',
    fontSize: '16px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    color: '#000'
  },
  textarea: {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #fff',
    fontSize: '16px',
    minHeight: '120px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    color: '#000'
  },
  button: {
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    letterSpacing: '0.5px'
  },
  footer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(6px)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 10px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 3,
    fontSize: '0.95rem'
  },
  footerText: {
    margin: '5px 0'
  }
};

export default Contact;

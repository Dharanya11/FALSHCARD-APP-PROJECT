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

      <div style={styles.overlay}>
        <Navbar1 />
        <br /><br /><br />
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
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
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
    margin: '0 auto'
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
    cursor: 'pointer'
  }
};

export default Contact;

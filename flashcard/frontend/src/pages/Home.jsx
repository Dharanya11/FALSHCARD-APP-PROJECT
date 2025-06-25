import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "DAA", image: "/daa.jpg", path: "/DAA" },
        { title: "Maths", image: "/m.jpg", path: "/maths" },
        { title: "DBMS", image: "/dbms.jpg", path: "/dbms" },
        { title: "WT", image: "/wt.jpg", path: "/wt" },
        { title: "OS", image: "/os.jpg", path: "/os" },
        { title: "CO", image: "/co.jpg", path: "/co" },
        { title: "ITC", image: "/itc.jpg", path: "/itc" },
        { title: "DS", image: "/ds.jpg", path: "/os" }
    ];

    return (
        <div style={styles.container}>
            <video autoPlay muted loop style={styles.video}>
                <source src="/bg1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div style={styles.overlay}>

                {/* 🔹 Navbar */}
                <nav style={styles.navbar}>
                    <button style={styles.navButton} onClick={() => navigate('/signup')}>Sign Up</button>
                    <button style={styles.navButton} onClick={() => navigate('/login')}>Login</button>
                </nav>

                {/* 🔹 Oval Card Section */}
                <section style={styles.cardSection}>
                    {cards.map((card, idx) => (
                        <div key={idx} style={{ ...styles.card, backgroundImage: `url(${card.image})` }}
                            onClick={() => navigate(card.path)}>
                            <h3 style={styles.cardTitle}>{card.title}</h3>
                        </div>
                    ))}
                </section>

                {/* 🔹 Footer */}
                <footer style={styles.footer}>
                    <p>© 2025 Flashcard App | Built with 💙 by Dharanya</p>
                </footer>
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: `'Segoe UI', sans-serif`,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1,
    },
    overlay: {
        position: 'relative',
        zIndex: 2,
        color: '#fff',
        height: '100%',
        padding: '30px 40px',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
    },
    topHeader: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    title: {
        fontSize: '3rem',
        marginBottom: '10px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#ddd',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    },
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        margin: '20px 0 40px',
        flexWrap: 'wrap',
    },
    navButton: {
        padding: '12px 28px',
        background: 'linear-gradient(45deg, #FF512F 0%, #DD2476 50%, #FF512F 100%)',
        border: 'none',
        borderRadius: '30px',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: '0 4px 15px rgba(221, 36, 118, 0.4)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 20px rgba(221, 36, 118, 0.6)',
        },
        '&:active': {
            transform: 'translateY(1px)',
        }
    },
    cardSection: {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px 0',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    card: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%', // Change to '50%' for circle
        width: '220px',
        height: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
        margin: '10px',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(9,132,227,0.7), rgba(155,89,182,0.7))',
            opacity: 0.5,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
        },
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.4)',

            '&::before': {
                opacity: 0.7,
            }
        }
    },

    cardTitle: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '12px 20px',
        borderRadius: '15px',
        fontSize: '1.3rem',
        fontWeight: '600',
        textAlign: 'center',
        zIndex: 2,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#fff',
        position: 'relative',
    },

    footer: {
        marginTop: 'auto',
        padding: '20px',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#ccc',
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)',
    }
};


export default Home;

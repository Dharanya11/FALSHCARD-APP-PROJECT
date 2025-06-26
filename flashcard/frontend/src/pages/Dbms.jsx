import React, { useState } from 'react';
import Navbar1 from '../component/Navbar1';

const questions = [
    { question: "What is a DBMS?", answer: "A software system to manage databases and perform operations on data." },
    { question: "Define Primary Key.", answer: "A unique identifier for a record in a table." },
    { question: "What is Normalization?", answer: "A process to eliminate redundancy and improve data integrity." },
    { question: "Types of Normal Forms?", answer: "1NF, 2NF, 3NF, BCNF, 4NF, 5NF." },
    { question: "What is SQL?", answer: "Structured Query Language used to manage data in a relational database." },
    { question: "Difference between DBMS and RDBMS?", answer: "RDBMS uses tables with relations; DBMS may not use relations." },
    { question: "Define Foreign Key.", answer: "A field that links to the primary key of another table." },
    { question: "What is a Transaction?", answer: "A sequence of operations performed as a single logical unit of work." },
    { question: "What is ACID property?", answer: "Atomicity, Consistency, Isolation, Durability — guarantees of database transactions." },
    { question: "What is indexing?", answer: "A data structure that improves the speed of data retrieval." }
];

const Dbms = () => {
    const [search, setSearch] = useState('');
    const [flippedIndex, setFlippedIndex] = useState(null);

    const filtered = questions.filter(q =>
        q.question.toLowerCase().includes(search.toLowerCase())
    );

    const handleFlip = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    return (
        <div style={styles.page}>

            <video autoPlay muted loop style={styles.video}>
                <source src="/bg1.mp4" type="video/mp4" />
            </video>

            <div style={styles.overlay}>
                <Navbar1 />
                <br /><br /><br />
                <h1 style={styles.title}>DBMS Flashcards</h1>

                <input
                    type="text"
                    placeholder="Search questions..."
                    style={styles.input}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div style={styles.grid}>
                    {filtered.map((item, idx) => (
                        <div
                            key={idx}
                            style={styles.cardWrapper}
                            onClick={() => handleFlip(idx)}
                        >
                            <div
                                style={{
                                    ...styles.card,
                                    transform: flippedIndex === idx ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                }}
                            >
                                <div style={{ ...styles.cardFace, ...styles.front }}>
                                    <h3 style={styles.q}>Q{idx + 1}: {item.question}</h3>
                                </div>
                                <div style={{ ...styles.cardFace, ...styles.back }}>
                                    <p><strong>Answer:</strong> {item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        fontFamily: 'Segoe UI, sans-serif',
        position: 'relative',
        minHeight: '100vh',
        overflowX: 'hidden'
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
        padding: '0 20px 40px',
        background: 'transparent'
    },
    title: {
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '50px',
        color: '#ffffff',
        textShadow: '1px 1px 5px #000',
        marginTop: '0px'
    },
    input: {
        display: 'block',
        margin: '0 auto 40px',
        padding: '12px 20px',
        width: '80%',
        maxWidth: '500px',
        borderRadius: '10px',
        border: '1px solid #fff',
        fontSize: '16px',
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
        justifyItems: 'center'
    },
    cardWrapper: {
        width: '200px',
        height: '200px',
        perspective: '1000px',
        cursor: 'pointer'
    },
    card: {
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.8s',
        borderRadius: '50%',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    },
    cardFace: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backfaceVisibility: 'hidden',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '600',
        transition: 'all 0.3s ease-in-out'
    },
    front: {
        background: 'linear-gradient(135deg, #f6d365, #fda085)',
        color: '#fff',
    },
    back: {
        background: '#ffffff',
        color: '#000',
        transform: 'rotateY(180deg)',
        fontSize: '0.95rem',
        fontWeight: '500'
    },
    q: {
        fontSize: '1rem',
        lineHeight: '1.4'
    }
};

export default Dbms;

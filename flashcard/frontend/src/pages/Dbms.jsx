import React, { useState } from 'react';
import Navbar1 from '../component/Navbar1';

const initialQuestions = [
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
    const [cards, setCards] = useState(initialQuestions);
    const [editIndex, setEditIndex] = useState(null);
    const [newQ, setNewQ] = useState('');
    const [newA, setNewA] = useState('');

    const filtered = cards.filter(q =>
        q.question.toLowerCase().includes(search.toLowerCase())
    );

    const handleFlip = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    const handleAddOrUpdate = () => {
        if (newQ.trim() === '' || newA.trim() === '') return;
        if (editIndex !== null) {
            const updated = [...cards];
            updated[editIndex] = { question: newQ, answer: newA };
            setCards(updated);
            setEditIndex(null);
        } else {
            setCards([...cards, { question: newQ, answer: newA }]);
        }
        setNewQ('');
        setNewA('');
    };

    const handleDelete = (e, index) => {
        e.stopPropagation();
        const updated = cards.filter((_, i) => i !== index);
        setCards(updated);
        setFlippedIndex(null);
    };

    const handleEdit = (e, index) => {
        e.stopPropagation();
        setNewQ(cards[index].question);
        setNewA(cards[index].answer);
        setEditIndex(index);
        setFlippedIndex(null);
    };

    return (
        <div style={styles.page}>
            <video autoPlay muted loop style={styles.video}>
                <source src="/bg1.mp4" type="video/mp4" />
            </video>

            <div style={styles.overlay}>
                <div style={styles.navbarFixed}>
                    <Navbar1 />
                </div>

                <h1 style={styles.title}>DBMS Flashcards</h1>

                <input
                    type="text"
                    placeholder="Search questions..."
                    style={styles.input}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div style={styles.form}>
                    <input
                        type="text"
                        placeholder="Enter Question"
                        value={newQ}
                        onChange={(e) => setNewQ(e.target.value)}
                        style={styles.formInput}
                    />
                    <input
                        type="text"
                        placeholder="Enter Answer"
                        value={newA}
                        onChange={(e) => setNewA(e.target.value)}
                        style={styles.formInput}
                    />
                    <button onClick={handleAddOrUpdate} style={styles.addBtn}>
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>

                <div style={styles.grid}>
                    {filtered.map((item, idx) => (
                        <div key={idx} style={styles.cardWrapper} onClick={() => handleFlip(idx)}>
                            <div style={{
                                ...styles.card,
                                transform: flippedIndex === idx ? 'rotateY(180deg)' : 'rotateY(0deg)'
                            }}>
                                <div style={{ ...styles.cardFace, ...styles.front }}>
                                    <h3 style={styles.q}>Q{idx + 1}: {item.question}</h3>
                                </div>
                                <div style={{ ...styles.cardFace, ...styles.back }}>
                                    <p><strong>Answer:</strong> {item.answer}</p>
                                    <div>
                                        <button style={styles.editBtn} onClick={(e) => handleEdit(e, idx)}>Edit</button>
                                        <button style={styles.deleteBtn} onClick={(e) => handleDelete(e, idx)}>Delete</button>
                                    </div>
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
        padding: '100px 20px 40px',
        background: 'transparent'
    },
    navbarFixed: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 3
    },
    title: {
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '30px',
        color: '#ffffff',
        textShadow: '1px 1px 5px #000'
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '40px'
    },
    formInput: {
        padding: '10px',
        width: '80%',
        maxWidth: '500px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc'
    },
    addBtn: {
        padding: '10px 20px',
        background: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
        justifyItems: 'center',
        padding: '20px'
    },
    cardWrapper: {
        width: '220px',
        height: '220px',
        perspective: '1000px',
        cursor: 'pointer',
        margin: '10px'
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '600',
        transition: 'all 0.3s ease-in-out'
    },
    front: {
        background: 'linear-gradient(135deg, #f6d365, #fda085)', // 🧡 Sunset Orange
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
    },
    editBtn: {
        padding: '6px 12px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        marginRight: '6px',
        cursor: 'pointer'
    },
    deleteBtn: {
        padding: '6px 12px',
        background: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
    }
};

export default Dbms;

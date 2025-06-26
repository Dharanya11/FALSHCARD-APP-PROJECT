import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from '../component/Navbar1';

const Daa = () => {
    const [search, setSearch] = useState('');
    const [flippedIndex, setFlippedIndex] = useState(null);
    const [cards, setCards] = useState([]);
    const [editId, setEditId] = useState(null);
    const [newQ, setNewQ] = useState('');
    const [newA, setNewA] = useState('');
    const api = 'https://falshcard-app-project.onrender.com'

    // Fetch data from backend
    useEffect(() => {
        axios.get(`${api}/api/daa`)
            .then(res => setCards(res.data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    const filtered = cards.filter(q =>
        q.question.toLowerCase().includes(search.toLowerCase())
    );

    const handleFlip = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    const handleAddOrUpdate = async () => {
        if (newQ.trim() === '' || newA.trim() === '') return;

        if (editId) {
            // update
            const res = await axios.put(`${api}/api/daa/${editId}`, {
                question: newQ,
                answer: newA
            });
            setCards(cards.map(card => card._id === editId ? res.data : card));
            setEditId(null);
        } else {
            // add
            const res = await axios.post(`${api}/api/daa`, {
                question: newQ,
                answer: newA
            });
            setCards([...cards, res.data]);
        }

        setNewQ('');
        setNewA('');
    };

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        await axios.delete(`${api}/api/daa/${id}`);
        setCards(cards.filter(card => card._id !== id));
        setFlippedIndex(null);
    };

    const handleEdit = (e, card) => {
        e.stopPropagation();
        setNewQ(card.question);
        setNewA(card.answer);
        setEditId(card._id);
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

                <h1 style={styles.title}>DAA Flashcards</h1>

                <input
                    type="text"
                    placeholder="Search questions..."
                    style={styles.input}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Form for Add/Edit */}
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
                        {editId ? 'Update' : 'Add'}
                    </button>
                </div>

                <div style={styles.grid}>
                    {filtered.map((item, idx) => (
                        <div
                            key={item._id}
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
                                    <div>
                                        <button style={styles.editBtn} onClick={(e) => handleEdit(e, item)}>Edit</button>
                                        <button style={styles.deleteBtn} onClick={(e) => handleDelete(e, item._id)}>Delete</button>
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

// Styles (ensure no duplicates like before)
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
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '30px',
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
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
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
        fontWeight: '600'
    },
    front: {
        background: 'linear-gradient(135deg, #80d0c7, #13547a)',
        color: '#fff'
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

export default Daa;

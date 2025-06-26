// import React, { useState } from 'react';
// import Navbar1 from '../component/Navbar1';

// const questions = [
//     { question: "What is the time complexity of Merge Sort?", answer: "O(n log n)" },
//     { question: "Define asymptotic notations.", answer: "They describe algorithm complexity as input size grows." },
//     { question: "What is Divide and Conquer?", answer: "Breaking problems into subproblems and combining results." },
//     { question: "Worst-case of Quick Sort?", answer: "O(n^2)" },
//     { question: "Greedy Algorithm Example?", answer: "Dijkstra’s Algorithm" },
//     { question: "What is Dynamic Programming?", answer: "Solving complex problems using memoization and substructure." },
//     { question: "Use of Backtracking?", answer: "Finding solutions by trying all possibilities." },
//     { question: "What is NP-Complete?", answer: "Problems that are both in NP and NP-Hard." },
//     { question: "Divide & Conquer example?", answer: "Merge Sort, Binary Search." },
//     { question: "What is polynomial time?", answer: "Time complexity that is a polynomial function of input size." }
// ];

// const Daa = () => {
//     const [search, setSearch] = useState('');
//     const [flippedIndex, setFlippedIndex] = useState(null);



//     const filtered = questions.filter(q =>
//         q.question.toLowerCase().includes(search.toLowerCase())
//     );

//     const handleFlip = (index) => {
//         setFlippedIndex(index === flippedIndex ? null : index);
//     };

//     return (
//         <div style={styles.page}>

//             {/* Background Video */}
//             <video autoPlay muted loop style={styles.video}>
//                 <source src="/bg1.mp4" type="video/mp4" />
//             </video>

//             {/* Transparent Overlay Content */}
//             <div style={styles.overlay}>
//                 <div style={styles.navbarFixed}>
//                     <Navbar1 />
//                 </div>

//                 <br /><br /><br />
//                 <h1 style={styles.title}>DAA Flashcards</h1>

//                 <input
//                     type="text"
//                     placeholder="Search questions..."
//                     style={styles.input}
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />

//                 <div style={styles.grid}>
//                     {filtered.map((item, idx) => (
//                         <div
//                             key={idx}
//                             style={styles.cardWrapper}
//                             onClick={() => handleFlip(idx)}
//                         >
//                             <div
//                                 style={{
//                                     ...styles.card,
//                                     transform: flippedIndex === idx ? 'rotateY(180deg)' : 'rotateY(0deg)',
//                                 }}
//                             >
//                                 <div style={{ ...styles.cardFace, ...styles.front }}>
//                                     <h3 style={styles.q}>Q{idx + 1}: {item.question}</h3>
//                                 </div>
//                                 <div style={{ ...styles.cardFace, ...styles.back }}>
//                                     <p><strong>Answer:</strong> {item.answer}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     );
// };

// const styles = {
//     page: {
//         fontFamily: 'Segoe UI, sans-serif',
//         position: 'relative',
//         minHeight: '100vh',
//         overflowX: 'hidden'
//     },
//     video: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         zIndex: 1,
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover'
//     },
//     overlay: {
//         position: 'relative',
//         zIndex: 2,
//         padding: '100px 20px 40px', // top padding to make space for fixed navbar
//         background: 'transparent'
//     },
//     navbarFixed: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         zIndex: 3
//     },
//     logo: {
//         margin: 0,
//         fontSize: '1.5rem',
//         fontWeight: 'bold'
//     },
//     title: {
//         textAlign: 'center',
//         fontSize: '2.5rem',
//         marginBottom: '50px',
//         color: '#ffffff',
//         textShadow: '1px 1px 5px #000',
//         marginTop: '0px'

//     },
//     input: {
//         display: 'block',
//         margin: '0 auto 40px',
//         padding: '12px 20px',
//         width: '80%',
//         maxWidth: '500px',
//         borderRadius: '10px',
//         border: '1px solid #fff',
//         fontSize: '16px',
//         backgroundColor: 'rgba(255,255,255,0.8)'
//     },
//     grid: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '40px',
//         justifyItems: 'center'
//     },
//     cardWrapper: {
//         width: '200px',
//         height: '200px',
//         perspective: '1000px',
//         cursor: 'pointer'
//     },
//     card: {
//         width: '100%',
//         height: '100%',
//         position: 'relative',
//         transformStyle: 'preserve-3d',
//         transition: 'transform 0.8s',
//         borderRadius: '50%',
//         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
//     },
//     cardFace: {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         borderRadius: '50%',
//         backfaceVisibility: 'hidden',
//         padding: '20px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         fontWeight: '600',
//         transition: 'all 0.3s ease-in-out'
//     },
//     front: {
//         background: 'linear-gradient(135deg, #80d0c7, #13547a)',
//         color: '#fff',
//     },
//     back: {
//         background: '#ffffff',
//         color: '#000',
//         transform: 'rotateY(180deg)',
//         fontSize: '0.95rem',
//         fontWeight: '500'
//     },
//     q: {
//         fontSize: '1rem',
//         lineHeight: '1.4'
//     }
// };

// export default Daa;
import React, { useState } from 'react';
import Navbar1 from '../component/Navbar1';

const initialQuestions = [
    { question: "What is the time complexity of Merge Sort?", answer: "O(n log n)" },
    { question: "Define asymptotic notations.", answer: "They describe algorithm complexity as input size grows." },
    { question: "What is Divide and Conquer?", answer: "Breaking problems into subproblems and combining results." },
    { question: "Worst-case of Quick Sort?", answer: "O(n^2)" },
    { question: "Greedy Algorithm Example?", answer: "Dijkstra’s Algorithm" },
    { question: "What is Dynamic Programming?", answer: "Solving complex problems using memoization and substructure." },
    { question: "Use of Backtracking?", answer: "Finding solutions by trying all possibilities." },
    { question: "What is NP-Complete?", answer: "Problems that are both in NP and NP-Hard." },
    { question: "Divide & Conquer example?", answer: "Merge Sort, Binary Search." },
    { question: "What is polynomial time?", answer: "Time complexity that is a polynomial function of input size." }
];

const Daa = () => {
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
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>

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
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '30px',
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '600',
        transition: 'all 0.3s ease-in-out'
    },
    front: {
        background: 'linear-gradient(135deg, #80d0c7, #13547a)',
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
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // exactly 4 cards per row
        gap: '40px',                          // space *between* cards
        justifyItems: 'center',
        padding: '20px'                       // space *around* the grid
    },
    cardWrapper: {
        width: '220px',
        height: '220px',
        perspective: '1000px',
        cursor: 'pointer',
        margin: '10px'                        // extra space *around* each card
    }

};

export default Daa;


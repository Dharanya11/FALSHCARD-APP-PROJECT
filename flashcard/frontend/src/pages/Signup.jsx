import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: formData.email, password: formData.password })
            });

            const data = await res.json();
            console.log("Signup response:", data);

            if (res.ok) {
                alert("Signup successful!");
                navigate("/login");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (err) {
            console.error("Error during signup:", err);
        }

        setFormData({ name: "", email: "", password: "" });
    };


    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/bg1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div ></div>
            <div style={styles.card}>
                <h2 style={styles.title}>Sign Up</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        zIndex: -2,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        width: '300px',
    },
    title: {
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '600',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    input: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#38a169',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: '600',
    }
};

export default Signup;

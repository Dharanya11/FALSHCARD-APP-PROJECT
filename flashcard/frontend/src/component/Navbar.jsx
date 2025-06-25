import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div
                style={{
                    textAlign: 'center',
                    background: 'linear-gradient(to right, #1A2980, #26D0CE)', // orange → pink → purple
                    color: 'white',
                    padding: '25px',
                    fontSize: '40px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '3px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                    borderBottom: '4px solid white',
                    transition: 'all 0.5s ease-in-out'
                }}
            >
                <h1 style={{ margin: 0 }}>Flashcard App</h1>
            </div>



            <nav className='navbar'>
                <Link to='/home' className='Link'>Home</Link>
                <Link to='/about' className='Link'>About</Link>
                <Link to='/contact' className='Link'>Contact</Link>
                <Link to='/login' className='Link'>Login</Link>
                <Link to='/signup' className='Link'>Signup</Link>

            </nav>
        </div>
    )
}

export default Navbar
import React from "react";
import Navbar from './component/Navbar'
import Navbar1 from './component/Navbar1'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Daa from './pages/Daa'
import Dbms from "./pages/Dbms";
import Maths from "./pages/Maths";
import Co from "./pages/Co";
import Itc from "./pages/Itc";
import Wt from "./pages/Wt";
import Os from "./pages/Os";
import Ds from "./pages/Ds";
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/daa' element={<Daa />} />
        <Route path='/dbms' element={<Dbms />} />
        <Route path='/maths' element={<Maths />} />
        <Route path='/co' element={<Co />} />
        <Route path='/itc' element={<Itc />} />
        <Route path='/os' element={<Os />} />
        <Route path='/wt' element={<Wt />} />
        <Route path='/ds' element={<Ds />} />

      </Routes>
    </div>
  )
}

export default App
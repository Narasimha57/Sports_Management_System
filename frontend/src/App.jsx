import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import  Contact  from './components/Contact';
import Sports from './components/Sports';

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sports' element={<Sports/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
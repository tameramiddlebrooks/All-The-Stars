import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import './style.css'
import Horoscope from './components/Horoscope'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Chart from './pages/Chart';
import { Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
    <div className ="App">
   <Navbar />
    <Routes>
      <Route path ="/" element ={<Horoscope />} />
      <Route path ="/about" element ={<About />} />
      <Route path ="/chart" element ={<Chart/>} />
    </Routes>
    </div>
    </>
  );
}

export default App;

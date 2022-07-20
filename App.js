import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import './style.css'
import Horoscope from './components/Horoscope'

function App() {

  
  return (
    <div className="App">
      <h1 className = 'title'>✩ ALL THE STARS ✩</h1>
      <h2 className='header'>Welcome! Choose your sign to read your horoscope!</h2>
      <Horoscope />
    </div>
  );
}

export default App;

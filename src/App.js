import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import './style.css'
import Horoscope from './Horoscope';
import About from './About';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

// const Component1 = () => {
//   return <h1>Horoscope</h1>;
// };

// const Component2 = () => {
//   return <h1>About</h1>;
// };


const App = () => {
  let Routes = useRoutes([
    { path: "/", element: <Horoscope /> },
    { path: "/About", element: <About /> },
    // ...
  ]);
  return Routes;
};

const AppWrapper = () => {
  return (
    <Router>
    <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;

// function App() {
//   return (
//     <>
//     <div className ="App">
//     <Routes>
//       <Route path ="/" element ={<Horoscope />} />
//       <Route path ="/about" element ={<About />} />
//     </Routes>
//     </div>
//     </>
//   );
// }

// export default App;
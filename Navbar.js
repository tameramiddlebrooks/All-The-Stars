import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    return (
    <nav className = "nav">
        {/* <h3> ✩ All The Stars ✩ </h3>
        <h4> The Best Site To Find Out What's Written In The Stars</h4> */}
        <Link to="/" className='app-title'>
        ✩All The Stars✩
            </Link>
        <ul>
            <li>
            <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Horoscope">Horoscope</Link>
            </li>
            <li className ="active">
                <Link to="/About">About</Link>
                </li>
                <li>
                <Link to="/chart">Full Birth Chart</Link>
                </li>
        </ul>
    </nav>

)}
export default Navbar;

function CustomLink({to, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
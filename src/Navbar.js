import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    return (
    <nav className = "nav">
                <h1 className="navbarTitle">All The Stars ✩</h1>

        <ul className="navLinks">
        <li className ="active">

        <Link to="/About">About</Link>
        </li>


        <Link to="/" >Home</Link>

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
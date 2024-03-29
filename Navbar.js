import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    return (
    <nav className = "nav">
    <Link to="/" className="app-title">All The Stars✩</Link>


                <ul className="navLinks">


                    <li className ="active">
                        <Link to="/About">About</Link>
                        </li>

                <li>
                <Link to="/Chart">Full Birth Chart</Link>
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

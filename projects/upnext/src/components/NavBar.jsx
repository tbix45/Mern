import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div className="nav-container">
                <div className="icon">
                    <Link to="/">Up Next...</Link>
                </div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Watch List</Link>
                    </li>
                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Movie</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
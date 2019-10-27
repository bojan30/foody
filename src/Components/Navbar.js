import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="search-bar">
                <div className="input-wrapper">
                    <input type="text" placeholder="Search recipes" />
                    <button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
                </div>
            </div>
            <ul className="menu">
                <li>
                    <a href="#"><i className="fas fa-user-circle"></i></a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import headerImage from '../../assets/images/header-image.png';
import Scrollchor from 'react-scrollchor';
import './Header.css';
const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <h2 className="title">
                        Food recipes
                    </h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eaque impedit
                    aspernatur? Repudiandae voluptas, accusamus expedita perferendis impedit minima deleniti.</p>
                    <Scrollchor to="#categories" className="btn">Categories <i className="fas fa-angle-down"></i></Scrollchor>
                </div>
                <div className="header-image">
                    <img src={headerImage} alt="header" />
                </div>
            </div>
        </header>
    );

}

export default Header;
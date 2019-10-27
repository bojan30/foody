import React from 'react';
import headerImage from '../assets/images/header-image.png';

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
                    <a className="btn">Categories <i className="fas fa-angle-down"></i></a>
                </div>
                <div className="header-image">
                    <img src={headerImage} alt="header" />
                </div>
            </div>
        </header>
    );

}

export default Header;
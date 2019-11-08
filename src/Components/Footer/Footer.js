import React from 'react';
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/icons/FB.png';
import insta from '../../assets/icons/INSTA.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="insta" /></a>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright - Golux Technologies 2019 - Bojan Ćuk</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
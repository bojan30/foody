import React from 'react';
import LoginModal from './LoginModal';
import LoginOverlay from './LoginOverlay';
import {connect} from 'react-redux';
import {loginModalActive} from '../actions/index'
import Scrollchor from 'react-scrollchor';
import {NavLink} from 'react-router-dom';
const Navbar = ({loginModalActive, isLoginModalActive}) => {
    return (
        <nav className="nav">
            {isLoginModalActive && <LoginOverlay/>}
            <div className="search-bar">
                <div className="input-wrapper">
                    <input type="text" placeholder="Search recipes" />
                    <button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
                </div>
            </div>
            <ul className="menu">
                <li className = "login-item">
                    <button className = "login-icon" onClick = {() => loginModalActive(true)}>
                        <i className="fas fa-user-circle"></i>
                    </button>
                    {isLoginModalActive && <LoginModal />}
                </li>
                <li>
                    <NavLink to = "/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/my-meals">My Meals</NavLink>
                </li>
                <li>
                    <Scrollchor to="#about">About Us</Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#contact">Contact</Scrollchor>
                </li>
            </ul>
        </nav>
    );
}
const mapStateToProps = (state) => {
    return {
        isLoginModalActive: state.isLoginModalActive
    }
}
const mapDispatchToProps = {
    loginModalActive
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
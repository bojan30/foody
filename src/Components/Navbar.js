import React from 'react';
import LoginModal from './LoginModal';
import LoginOverlay from './LoginOverlay';
import {connect} from 'react-redux';
import {loginModalActive} from '../actions/index'
import Scrollchor from 'react-scrollchor';
import {NavLink} from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({loginModalActive, isLoginModalActive, isLoggedIn}) => {
    return (
        <nav className="nav">
            {isLoginModalActive && <LoginOverlay/>}
            <SearchBar />
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
                    {isLoggedIn && <NavLink to="/my-meals">My Meals</NavLink>}
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
        isLoginModalActive: state.isLoginModalActive,
        isLoggedIn: state.isLoggedIn
    }
}
const mapDispatchToProps = {
    loginModalActive
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
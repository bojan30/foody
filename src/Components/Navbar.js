import React from 'react';
import LoginModal from './LoginModal';
import LoginOverlay from './LoginOverlay';
import {connect} from 'react-redux';
import {loginModalActive} from '../actions/index'
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
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Contact</a>
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
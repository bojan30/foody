import React, {useState} from 'react';
import LoginModal from '../LoginModal/LoginModal';
import LoginOverlay from '../LoginOverlay/LoginOverlay';
import {connect} from 'react-redux';
import {loginModalActive, searchResults} from '../../actions/index'
import Scrollchor from 'react-scrollchor';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import './Navbar.css';

const Navbar = ({location,history, loginModalActive, isLoginModalActive, isLoggedIn, searchResults}) => {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch = () => {
        //dispatch search results action
        searchResults(search);
        setSearch("");
        history.push('/search');

    }
    return (
        <nav className="nav">
            {isLoginModalActive && <LoginOverlay/>}
            <div className="search-bar">
                <div className="input-wrapper">
                    <input onChange = {handleChange} type="text" placeholder="Search" value = {search}/>
                    <button onClick = {handleSearch} className="search-btn" type="submit"><i className="fas fa-search"></i></button>
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
                    {location.pathname !== "/" && <NavLink to="/">Home</NavLink>}
                </li>
                <li>
                    {isLoggedIn && <NavLink to="/my-meals">My Meals</NavLink>}
                </li>
                <li>
                    {location.pathname === "/" && <Scrollchor to="#about">About Us</Scrollchor>}
                </li>
                <li>
                    {location.pathname === "/" && <Scrollchor to="#contact">Contact</Scrollchor>}
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
    loginModalActive,
    searchResults
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
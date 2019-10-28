import React, {useState} from 'react';
import {connect} from 'react-redux';
import {login, loginModalActive, logout} from '../actions/index';
import {users} from '../users';
const LoginModal = ({login, isLoggedIn, loginModalActive, logout}) => {
    const [loginData, setLoginData] = useState({email: "", password: ""});
    const [message, setMessage] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        //check if there is a user with email
        const user = users.find(user => user.email === loginData.email);
        if(user) {
            //check if the password is correct
            if(user.password === loginData.password){
                //login success!!!
                setMessage({type: 'success', text: "Login success!!!"});
                login();
                //close login modal after one second
                setTimeout(() => {
                    loginModalActive(false); 
                }, 1000);
            }
            else{
                //set password error
                setMessage({ type: 'error', text: "Password is incorrect!!!" });
            }
        }
        else{
            //set email error
            setMessage({ type: 'error', text: "No user with that email!!!" });
        }
    }
    const handleLogout = () => {
        logout();
        loginModalActive(false);
    }
    const renderLoginLogoutButton = () => {
        if(isLoggedIn){
            return <button type="button" onClick = {handleLogout} className="btn login">Logout</button>;
        }
        return <button className="btn login">Login</button>;
    }
    return (
        <div className="login-modal">
            <form onSubmit = {handleSubmit} className="login-modal-form">
                {!isLoggedIn && <input
                    id="email"
                    onChange={(e) => setLoginData({ ...loginData, [e.target.id]: e.target.value })} type="text"
                    placeholder="Email"
                    value={loginData.email}
                />}
                {!isLoggedIn && <input
                    id="password"
                    onChange={(e) => setLoginData({ ...loginData, [e.target.id]: e.target.value })}
                    type="text"
                    placeholder="Password"
                    value={loginData.password}
                />}
                {message && <div className={`message ${message.type}`}>{message.text}</div>}
                {renderLoginLogoutButton()}
            </form>
        </div>
    );

}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
}

const mapDispatchToProps = {
    login,
    loginModalActive,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
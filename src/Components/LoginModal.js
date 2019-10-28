import React from 'react';

const LoginModal = () => {

    return (
        <div className="login-modal">
            <form className="login-modal-form">
                <input type="text" placeholder = "Email"/>
                <input type="text" placeholder = "Password" />
                <button className = "btn login">Login</button>
            </form>
        </div>
    );

}

export default LoginModal;
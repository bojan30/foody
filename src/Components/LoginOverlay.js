import React from 'react';
import {loginModalActive} from '../actions/index';
import {connect} from 'react-redux';

const LoginOverlay = ({loginModalActive}) => {

    return (
        <div onClick = {() => loginModalActive(false)} className="login-overlay"></div>
    );

};
const mapDispatchToProps = {
    loginModalActive
}
export default connect(null, mapDispatchToProps)(LoginOverlay);
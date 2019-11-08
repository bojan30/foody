import React from 'react';
import './Contact.css';
const Contact = () => {

    return (
        <section className="section contact" id = "contact">
            <div className="container">
                <h3 className="section-title">
                    Contact
                </h3>
                <form className="contact-form">
                    <div className="form-control">
                        <input type="text" placeholder="First name"/>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Last name"/>
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="form-control">
                        <textarea placeholder="Message" rows="10"></textarea>
                    </div>
                    <button className="btn send">Send</button>
                </form>
            </div>
        </section>
    );

}
export default Contact;
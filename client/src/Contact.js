import React from 'react';
import ContactForm from './ContactForm';

const Contact = (props) => {
    return(
        <div className="container">
            <div className="header">
                <div className="htmltag">
                    <p>&lt;h1&gt;</p>
                </div>
                    <h1 className="active">{props.createBoingLetters("Contact me")}</h1>
                <div className="htmltag">
                    <p>&lt;h1/&gt;</p>
                </div>
                <div className="text-area">
                    <p>I am interested in both freelance opportunities and fulltime employment. If you have any questions or requests, please contact me using the form below.
                    </p>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
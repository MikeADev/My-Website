import React from 'react';

class ContactForm extends React.Component {
    state = {

    }

    render (){
        return(
            <form id="contact-form" method="POST" autoComplete="off">
                <div className="responsive-input">
                    <input type="text" id="name" placeholder="Name"/>
                    <span className="input-border"></span>
                </div>
                <div className="responsive-input">
                    <input type="email" id="email" placeholder="E-mail"/>
                    <span className="input-border"></span>
                </div>
                <div>
                    <input type="text" id="subject" placeholder="Subject"/>
                    <span className="input-border"></span>
                </div>
                <div>
                    <textarea rows="5" id="message" placeholder="Message"></textarea>
                    <span className="input-border"></span>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ContactForm
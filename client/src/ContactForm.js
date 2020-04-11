import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        uxcolors: {
            name: '#61bafd',
            email: '#61bafd',
            subject: '#61bafd',
            message: '#61bafd'
        }
    }

    onInputChange = (e) => { 
        this.setState({[e.target.id]: e.target.value})
    }

    resetForm = () => {
        this.setState({name: '', email: '', subject: '', message: ''})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response)=>{
            if (response.data.status === "success"){
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === "fail"){
                alert("Message failed to send.")
            }
        })
    }

    render (){
        return(
            <form id="contact-form" method="POST" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="responsive-input">
                    <input type="text" id="name" placeholder="Name" value={this.state.name} onChange={this.onInputChange.bind(this)}/>
                    <span className="input-border" style={{borderColor: this.state.uxcolors.name}}></span>
                </div>
                <div className="responsive-input">
                    <input type="email" id="email" placeholder="E-mail" value={this.state.email} onChange={this.onInputChange.bind(this)}/>
                    <span className="input-border" style={{borderColor: this.state.uxcolors.email}}></span>
                </div>
                <div>
                    <input type="text" id="subject" placeholder="Subject" value={this.state.subject} onChange={this.onInputChange.bind(this)}/>
                    <span className="input-border" style={{borderColor: this.state.uxcolors.subject}}></span>
                </div>
                <div>
                    <textarea rows="5" id="message" placeholder="Message" value={this.state.message} onChange={this.onInputChange.bind(this)}></textarea>
                    <span className="input-border" style={{borderColor: this.state.uxcolors.message}}></span>
                </div>
                <div className="myBtn">
                    <button type="submit">send</button>
                </div>
            </form>
        )
    }
}

export default ContactForm
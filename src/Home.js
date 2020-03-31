import React from 'react';
import BoingLetter from './BoingLetter'

class Home extends React.Component {

    state = {
        message: "Hi,+I'm Mike,+web developer."
    }

    createSpans = (message) => {
        let letters = message.split("");
        let spans = letters.map(letter => 
            <BoingLetter addBoing={this.addBoing} removeBoing={this.removeBoing} letter={letter} />)
        return spans
    }

    addBoing = (e) => {
        e.target.className = "boing";
    }

    removeBoing = (e) => {
        e.target.className = "";
    }
    render() {
        return (
            <div className="homeIntro">
                <div className="htmltag">
                    <p>&lt;h1&gt;</p>
                </div>
                <h1>{this.createSpans(this.state.message)}</h1>
                <div className="htmltag closing-h1">
                    <p>&lt;h1/&gt;</p>
                </div>
                <p>Full Stack Developer / Freelancer</p>
                <div className="myBtn"><a href="contact">contact me</a></div>
            </div>
        )
    }
}

export default Home
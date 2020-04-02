import React from 'react';

class HomeIntro extends React.Component{

    state = {
        message: "Hi,+I’m Mike,+web developer." // + indicates a line break
    }

    render(){
        return(
            <div className="homeIntro">
                <div className="htmltag">
                    <p>&lt;h1&gt;</p>
                </div>
                <h1>{this.props.createBoingLetters(this.state.message)}</h1>
                <div className="htmltag closing-h1">
                    <p>&lt;h1/&gt;</p>
                </div>
                <p>Full Stack Developer / Freelancer</p>
                <div className="myBtn"><a href="contact">contact me</a></div>
            </div>
        )
    }
}

export default HomeIntro
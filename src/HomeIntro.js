import React from 'react';

const HomeIntro = (props) => {
    return(
        <div className="header home-header">
            <div className="htmltag">
                <p>&lt;h1&gt;</p>
            </div>
            <h1>{props.createBoingLetters(props.message)}</h1>
            <div className="htmltag closing-h1">
                <p>&lt;h1/&gt;</p>
            </div>
            <p>Full Stack Developer / Freelancer</p>
            <div className="myBtn">
                <a href="contact">contact me</a>
            </div>
        </div>
    )
}

export default HomeIntro
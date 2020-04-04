import React from 'react';

const Skills = (props) => {
    return(
        <div className="container">
            <div className="header">
                <div className="htmltag">
                    <p>&lt;h1&gt;</p>
                </div>
                    <h1 className="active">{props.createBoingLetters("Skills &+Experience")}</h1>
                <div className="htmltag">
                    <p>&lt;h1/&gt;</p>
                </div>
                <div class="text-area">
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
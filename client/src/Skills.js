import React from 'react';

const Skills = (props) => {
    return(
        <div className="container">
            <div className="header">
                <div className="htmltag">
                    <p>&lt;h1&gt;</p>
                </div>
                    <h1 className="active">
                        <span onMouseOver={props.addBoing} onAnimationEnd={props.removeBoing}>Skills</span>&nbsp;
                        <span onMouseOver={props.addBoing} onAnimationEnd={props.removeBoing}>&amp;</span>&nbsp;
                        <span onMouseOver={props.addBoing} onAnimationEnd={props.removeBoing}>Experience</span>
                    </h1>
                <div className="htmltag">
                    <p>&lt;h1/&gt;</p>
                </div>
                <div className="text-area">
                    <p>My main area of expertise is in front end development (client side of the web)</p>
                    <p>HTML, CSS, JS (TypeScript), building small and medium sized web apps with React, custom features,
                        animations, and interactive layouts.</p>
                    <p>Visit my <a href="https://www.linkedin.com/in/mike-archer">LinkedIn</a> profile for more details or just <a href="/contact">contact</a> me.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
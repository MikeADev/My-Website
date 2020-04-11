import React from 'react';

const About = (props) => {
    return(
        <div className="container">
            <div className="header">
                <div className="htmltag">
                    <p>&lt;h1&gt;</p>
                </div>
                    <h1 className="active">{props.createBoingLetters("About me")}</h1>
                <div className="htmltag">
                    <p>&lt;h1/&gt;</p>
                </div>
                <div className="text-area">
                    <p>Web Development student with a deep passion for web development and technology.</p>
                    <p>Organized, problem solver and independent employee with high attention to detail. Big fan of Chess, Japanese
                        language and culture, food, cooking, and video games.</p>
                    <p>Interested in the entire front and backend spectrum and working on projects of all sizes.</p>
                </div>
            </div>
        </div>
    )
}

export default About
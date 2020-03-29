import React from 'react';

function HomeIntro(props) {
    return (
        <div className="homeIntro">
            <div className="htmltag">
                <p>&lt;h1&gt;</p>
            </div>
            <h1><span>H</span><span>i</span><span>,</span></h1>
            <h1><span>I</span><span className="comma">,</span><span>m</span><span> M</span><span>i</span><span>k</span><span>e</span><span>,</span></h1>
            <h1>web developer.</h1>
            <div className="htmltag closing-h1">
                <p>&lt;h1/&gt;</p>
            </div>
            <p>Full Stack Developer / Freelancer</p>
            <div className="myBtn"><a href="contact">contact me</a></div>
        </div>
    )
}

export default HomeIntro
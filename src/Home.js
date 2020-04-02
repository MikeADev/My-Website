import React from 'react';
import HomeIntro from './HomeIntro';
import Logo from './Logo';

let Home = (props) => {
    return (
        <div className="container">
            <HomeIntro createBoingLetters={props.createBoingLetters} />
            <Logo />
        </div>
    )
}

export default Home
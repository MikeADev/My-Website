import React from 'react';
import HomeIntro from './HomeIntro';
import Logo from './Logo';

const Home = (props) => {
    return (
        <div className="container">
            <HomeIntro 
                createBoingLetters={props.createBoingLetters} 
                message="Hi,+I’m Mike,+web developer." // + indicates <br/>
            />
            <Logo />
        </div>
    )
}

export default Home
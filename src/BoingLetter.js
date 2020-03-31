import React from 'react';

let BoingLetter = (props) => { 
    let htmlLetter;

    if (props.letter === "+") {
        htmlLetter = <br/>
    } else if (props.letter === " ") {
        htmlLetter = <span>&nbsp;</span>
    } else {
        htmlLetter = <span onMouseOver={props.addBoing} onAnimationEnd={props.removeBoing}>{props.letter}</span>
    }
    return (htmlLetter)
    
}

export default BoingLetter
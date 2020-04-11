import React from 'react';

class Logo extends React.Component{
    componentDidMount(){
        let paths = document.querySelectorAll("path");
        for (var path = 0; path < paths.length; path++){
            paths[path].getBoundingClientRect();
            paths[path].style.transition = 'stroke-dashoffset 3s ease-in-out';
            paths[path].style.strokeDashoffset = '0';
        }
    }

    render(){
        return(
            <div className="logo-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 70" transform="rotate(-15,0,0)">
                    <path stroke="#fde661" strokeDasharray="486.56 486.56" strokeDashoffset="486.56" strokeWidth=".5" d="m 4 66 h 10 v -48.75 l 10 48.75 h 10 l 10 -48.75 v 48.75 h 10 v -65 h -15 l -10 48.75 l -10 -48.75 h -15 z " fill="#1d1d1d"/>
                    <path stroke="#fd618d" strokeDasharray="486.56 486.56" strokeDashoffset="486.56" strokeWidth=".5" d="m 2 68 h 10 v -48.75 l 10 48.75 h 10 l 10 -48.75 v 48.75 h 10 v -65 h -15 l -10 48.75 l -10 -48.75 h -15 z " fill="#1d1d1d"/>
                    <path stroke="#61bafd" strokeDasharray="486.56 486.56" strokeDashoffset="486.56" strokeWidth=".5" d="m 0 70 h 10 v -48.75 l 10 48.75 h 10 l 10 -48.75 v 48.75 h 10 v -65 h -15 l -10 48.75 l -10 -48.75 h -15 z " fill="#1d1d1d"/>
                </svg>
            </div>
        )
    }
}

export default Logo
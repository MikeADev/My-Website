import React from 'react';

class Logo extends React.Component{
    componentDidMount(){
        let colors = ["#fd618d", "#61bafd", "#fde661"]
        let paths = document.querySelectorAll("path");
        for (var path = 0; path < paths.length; path++){
            paths[path].getBoundingClientRect();
            paths[path].style.transition = 'stroke-dashoffset 2s ease-in-out, fill 4s ease-in-out';
            paths[path].style.strokeDashoffset = '0';
        }
    }

    render(){
        return(
            <div className="logo-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path stroke="#fde661" strokeDasharray="486.56 486.56" strokeDashoffset="486.56" strokeWidth=".75" d="m 28 90 h 10 v -48.75 l 10 48.75 h 10 l 10 -48.75 v 48.75 h 10 v -65 h -15 l -10 48.75 l -10 -48.75 h -15 z " fill="#1d1d1d"/>
                    <path stroke="#fd618d" strokeDasharray="486.56 486.56" strokeDashoffset="486.56" strokeWidth=".75" d="m 24 92 h 10 v -48.75 l 10 48.75 h 10 l 10 -48.75 v 48.75 h 10 v -65 h -15 l -10 48.75 l -10 -48.75 h -15 z " fill="#1d1d1d"/>
                    <path stroke="#61bafd" strokeDasharray="486.56 486.56" strokeDashoffset="486.56" strokeWidth=".75" d="m 20 94 h 10 v -48.75 l 10 48.75 h 10 l 10 -48.75 v 48.75 h 10 v -65 h -15 l -10 48.75 l -10 -48.75 h -15 z " fill="#1d1d1d"/>
                </svg>
            </div>
        )
    }
}

export default Logo
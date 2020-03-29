import React from 'react';

let SideNav = () => {
    return (
        <nav>
            <ul>
                <li><a className="active" href="home"><i className="fa fa-home fa-3x"></i><b>home</b></a></li>
                <li><a href="about"><i className="fa fa-user fa-3x"></i><b>about</b></a></li>
                <li><a href="skills"><i className="fa fa-cog fa-3x"></i><b>skills</b></a></li>
                <li><a href="portfolio"><i className="fa fa-eye fa-3x"></i><b>my work</b></a></li>
                <li><a href="contact"><i className="fa fa-envelope fa-3x"></i><b>contact</b></a></li>
            </ul>
        </nav>
    )
}

export default SideNav;
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="active"><i className="fa fa-home fa-3x"></i><b>home</b></NavLink></li>
                <li><NavLink to="/about" activeClassName="active"><i className="fa fa-user fa-3x"></i><b>about</b></NavLink></li>
                <li><NavLink to="/skills" activeClassName="active"><i className="fa fa-cog fa-3x"></i><b>skills</b></NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="active"><i className="fa fa-eye fa-3x"></i><b>my work</b></NavLink></li>
                <li><NavLink to="/contact" activeClassName="active"><i className="fa fa-envelope fa-3x"></i><b>contact</b></NavLink></li>
            </ul>
        </nav>
    )
}

export default SideNav;
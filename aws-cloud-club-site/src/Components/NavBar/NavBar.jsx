import "./NavBarStyles.css"

import React from "react" ;

import { Link } from "react-router-dom" ;

import AWSCloudClubLogo from "../../assets/img/logo.png" ;


function NavBar() {
    return (
        <div className = "navbar">
            <Link to = "/">
                <img className = "logo" src = { AWSCloudClubLogo } alt = "AWSCloudClubLogo" />
            </Link>
        
            <ul className = "navbar-menu">
                <li>
                    <Link to = "/" >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to = "/events" >
                        Events
                    </Link>
                </li>
                <li>
                    <Link to = "/resources" >
                        Resources
                    </Link>
                </li>
                <li>
                    <Link to = "/gallery" className = "navbar-menu-last-element" >
                        Gallery
                    </Link>
                </li>
            </ul>
        </div>
    ) ;
}


export default NavBar ;

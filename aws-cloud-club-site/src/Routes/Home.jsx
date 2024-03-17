import React from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Activities from "../Components/Activities/Activities";


function Home() {
    return (
        <div className = "home-page">
            <NavBar />
            <Hero />
            <About />
            <Activities />
        </div>
    ) ;
}


export default Home ;

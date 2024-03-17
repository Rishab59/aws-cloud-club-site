import React from "react" ;

import NavBar from "../Components/NavBar" ;
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";


function Home() {
    return (
        <div className = "home-page">
            <NavBar />
            <Hero />
            <About />
        </div>
    ) ;
}


export default Home ;

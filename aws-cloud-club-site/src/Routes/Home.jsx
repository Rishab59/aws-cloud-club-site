import React from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Benefits from "../Components/Benefits/Benefits";
import Footer from "../Components/Footer/Footer";
import Credits from "../Components/Credits/Credits";


function Home() {
    return (
        <div className = "home-page">
            <NavBar />
            <Hero />
            <About />
            <Benefits />
            <Footer />
            <Credits />
        </div>
    ) ;
}


export default Home ;

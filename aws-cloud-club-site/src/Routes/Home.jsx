import React from "react" ;

import NavBar from "../Components/NavBar" ;
import Hero from "../Components/Hero/Hero";
import SectionHeader from "../Components/Section/SectionHeader/SectionHeader";
import Section from "../Components/Section/Section";


function Home() {
    return (
        <div className = "home-page">
            <NavBar />
            <Hero />
            <Section />
        </div>
    ) ;
}


export default Home ;

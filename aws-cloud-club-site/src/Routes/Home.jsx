import React from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import Hero from "../Components/Hero/Hero";
import Benefits from "../Components/Benefits/Benefits";
import Footer from "../Components/Footer/Footer";
import CtaSection from "../Components/CtaSection/CtaSection";
import StatsSection from "../Components/StatsSection/StatsSection";
import ContributeSection from "../Components/ContributeSection/ContributeSection";
import IntroSection from "../Components/IntroSection/IntroSection";


function Home() {
    return (
        <div className = "home-page">
            <NavBar />
            <Hero />
            <IntroSection />
            <StatsSection />
            <ContributeSection />
            <Benefits />
            <CtaSection />
            <Footer />
        </div>
    ) ;
}


export default Home ;

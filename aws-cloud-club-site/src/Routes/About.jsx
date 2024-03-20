import React from 'react'

import AboutSection from '../Components/AboutSection/AboutSection';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import TeamSection from '../Components/TeamSection/TeamSection';


function About() {
    return (
        <div className='about-page'>
            <NavBar />
            <AboutSection />
            <TeamSection />
            <Footer />
        </div>
    ) ;
}

export default About ;

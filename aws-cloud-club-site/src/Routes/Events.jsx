import React from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import EventsSection from "../Components/EventsSection/EventsSection";
import Footer from "../Components/Footer/Footer";


function Events() {
    return (
        <div className = "events-page">
            <NavBar />
            <EventsSection />
            <Footer />
        </div>
    ) ;
}


export default Events ;
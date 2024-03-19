import React from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import EventsSection from "../Components/EventsSection/EventsSection";


function Events() {
    return (
        <div className = "events-page">
            <NavBar />
            <EventsSection />
        </div>
    ) ;
}


export default Events ;

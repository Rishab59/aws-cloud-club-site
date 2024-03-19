import React from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import ResourcesSection from "../Components/ResoursesSection/ResourcesSection";
import Footer from "../Components/Footer/Footer";


function Resources() {
    return (
        <div className = "resources-page">
            <NavBar />
            <ResourcesSection />
            <Footer />
        </div>
    ) ;
}


export default Resources ;

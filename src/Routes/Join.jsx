import React from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import Footer from "../Components/Footer/Footer";
import JoinGuide from "../Components/JoinGuide/JoinGuide";


function Join() {
    return (
        <div className = "Join-page">
            <NavBar />
            <JoinGuide />
            <Footer />
        </div>
    ) ;
}


export default Join;

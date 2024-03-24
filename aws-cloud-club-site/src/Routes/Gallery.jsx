import React from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import GallerySection from "../Components/GallerySection/GallerySection";
import Footer from "../Components/Footer/Footer";


function Gallery() {
    return (
        <div className = "gallery-page">
            <NavBar />
            <GallerySection />
            <Footer />
        </div>
    ) ;
}


export default Gallery ;

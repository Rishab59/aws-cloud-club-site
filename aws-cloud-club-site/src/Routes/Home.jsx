import React from "react" ;

import { Button } from "react-bootstrap" ;
import NavBar from "../Componenets/NavBar";


function Home() {
    return (
        <div className = "pt-5">
            <NavBar />
            Home
            <br />
            <Button>Testing Bootstrap</Button>
        </div>
    ) ;
}


export default Home ;

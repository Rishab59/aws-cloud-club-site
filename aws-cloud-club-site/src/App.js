import "./App.css" ;
import "bootstrap/dist/css/bootstrap.min.css" ;

import { Route, Routes } from "react-router-dom" ;

import Home from "./Routes/Home" ;
import Events from "./Routes/Events" ;
import Resources from "./Routes/Resources" ;
import Gallery from "./Routes/Gallery" ;


function App() {
  return (
    <div className = "App">
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/events" element = { <Events /> } />
        <Route path = "/resources" element = { <Resources /> } />
        <Route path = "/gallery" element = { <Gallery /> } />
      </Routes>
    </div>
  ) ;
}


export default App ;

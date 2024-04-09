import "./App.css" ;
import "bootstrap/dist/css/bootstrap.min.css" ;

import { Route, Routes } from "react-router-dom" ;

import Home from "./Routes/Home" ;
import Events from "./Routes/Events" ;
import Resources from "./Routes/Resources" ;
import Gallery from "./Routes/Gallery" ;
import About from "./Routes/About";
import Join from "./Routes/Join";


function App() {
  return (
    <div className = "App">
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/events" element = { <Events /> } />
        <Route path = "/resources" element = { <Resources /> } />
        <Route path = "/gallery" element = { <Gallery /> } />
        <Route path = "/join" element = { <Join /> } />
      </Routes>
    </div>
  ) ;
}


export default App ;

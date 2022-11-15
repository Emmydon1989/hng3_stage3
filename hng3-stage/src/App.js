import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css'
import React from "react";
import Home from './Home';
import Place from './Place';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Place" element={<Place />}  />     
      </Routes>
    </Router>
  )
}
export default App;
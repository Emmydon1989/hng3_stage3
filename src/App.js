
import Card from "./card"
import Contact from "./contact";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/#/" element={<Card />} />
            <Route path="/#/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;

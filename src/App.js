import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Nav } from "./Components/Nav";
import { BinThereDumpedThat } from "./Pages/BinThereDumpedThat";
import { StudySpotr } from "./Pages/StudySpotr";
import { About } from "./Pages/About";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studySpotr" element={<StudySpotr />} />
        <Route path="/bintheredumpedthat" element={<BinThereDumpedThat />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

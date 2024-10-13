import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Nav } from "./Components/Nav";
import { BinThereDumpedThat } from "./Pages/BinThereDumpedThat";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bintheredumpedthat" element={<BinThereDumpedThat />} />
      </Routes>
    </Router>
  );
}

export default App;

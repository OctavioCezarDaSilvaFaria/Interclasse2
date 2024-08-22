import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Futsal from "./pages/Futsal";
import Voleibol from "./pages/Voleibol";
import Handebol from "./pages/Handebol";
import Queimada from "./pages/Queimada";
import Basquete from "./pages/Basquete";
import Futmesa from "./pages/Futmesa";
import TennisDeMesa from "./pages/TennisDeMesa";
import Atletismo from "./pages/Atletismo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Futsal" element={<Futsal />} />
          <Route path="/Voleibol" element={<Voleibol />} />
          <Route path="/Handebol" element={<Handebol />} />
          <Route path="/Queimada" element={<Queimada />} />
          <Route path="/Basquete" element={<Basquete />} />
          <Route path="/Futmesa" element={<Futmesa />} />
          <Route path="/TennisDeMesa" element={<TennisDeMesa />} />
          <Route path="/Atletismo" element={<Atletismo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

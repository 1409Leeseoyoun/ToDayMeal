import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../routes/Home";
import FoodList from "../routes/FoodList";
import Roulette from "../routes/Roulette";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-list" element={<FoodList />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </Router>
  );
}

export default App;

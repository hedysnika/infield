import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navigation from "./navigation";
import Categories from "./pages/categories";
import Breathing from "./pages/breathing";
import Sleeping from "./pages/sleeping";
import Exercise from "./pages/exercise";
import HealthyHabits from "./pages/healthyhabits";
import Disease from "./pages/disease";
import Lectin from "./pages/lectin";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/breathing" element={<Breathing />} />
        <Route path="/sleeping" element={<Sleeping />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/healthyhabits" element={<HealthyHabits />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/lectin" element={<Lectin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

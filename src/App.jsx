import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navigation from "./Components/Navigation";
import Categories from "./pages/categories";
import Breathing from "./pages/fields/Breathing";
import Sleeping from "./pages/fields/Sleeping";
import Exercise from "./pages/fields/Exercise";
import HealthyHabits from "./pages/fields/healthyhabits";
import Disease from "./pages/fields/disease";
import Lectin from "./pages/fields/Lectin";

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

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CustomBeer from "../pages/CustomBeer";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-beers" element={<CustomBeer />} />
    </Routes>
  );
};

export default Routers;

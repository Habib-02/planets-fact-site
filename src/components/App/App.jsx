import { Routes, Route, Navigate } from "react-router";

import Layout from "../../Layout/Layout";
import PlanetInfo from "../PlanetInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/planet/mercury" />} />
        <Route path="planet/:planetName" element={<PlanetInfo />} />
      </Route>
    </Routes>
  );
}

export default App;

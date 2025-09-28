import { Routes, Route, Navigate } from "react-router";

import Layout from "../../Layout/Layout";
import PlanetInfo from "../PlanetInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Navigate to="planet/mercury/overview" replace />}
        />
        <Route
          path="planet/:planetName/:view?"
          element={<PlanetInfo />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;

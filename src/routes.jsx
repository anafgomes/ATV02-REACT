import React from "react";
import CombustivelCalculator from "./pages/CombustivelCalculator";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CombustivelCalculator />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

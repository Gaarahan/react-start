import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Game from "./Game";
import TempatureCalculator from "./TempatureCalculator";
import ProductTable from "./ProductTable";

export const App = () => (
  <div className="App">
    <h1>Welcome</h1>
    <ol>
      <li>
        <Link to="/tic-tac-toe">Tic-tac-toe</Link>
      </li>
      <li>
        <Link to="/tempature-calculator">TempatureCalculator</Link>
      </li>
      <li>
        <Link to="/product-table">ProductTable</Link>
      </li>
    </ol>

  <Routes>
    <Route path="/tic-tac-toe" element={<Game />} />
    <Route path="/tempature-calculator" element={<TempatureCalculator />} />
    <Route path="/product-table" element={<ProductTable />} />
  </Routes>
  </div>
);

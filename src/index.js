import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Game from "./components/Game/Game";
import TempatureCalculator from "./components/TempatureCalculator/TempatureCalculator";
import ProductTable from "./components/ProductTable/ProductTable";

const App = (
  <div className="App">
    <Game />

    <hr />

    <TempatureCalculator />

    <hr />

    <ProductTable />
  </div>
);

// ========================================

ReactDOM.render(App, document.getElementById("root"));

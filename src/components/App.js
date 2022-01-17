import React, { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import { UserContext } from "../utils";

const Game = lazy(() => import("./Game"));
const TemperatureCalculator = lazy(() => import("./TemperatureCalculator"));
const ProductTable = lazy(() => import("./ProductTable"));

export default class App extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      userContextName: "",
      setName: (name) => {
        this.setState({ userContextName: name });
      },
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <ol>
            <h1>Welcome: {this.state.userContextName}</h1>
            <li>
              <Link to="/tic-tac-toe">Tic-tac-toe</Link>
            </li>
            <li>
              <Link to="/temperature-calculator">TemperatureCalculator</Link>
            </li>
            <li>
              <Link to="/product-table">ProductTable</Link>
            </li>
            <li>
              <Link to="/">Back</Link>
            </li>
          </ol>
        </div>

        <UserContext.Provider
          value={{
            name: this.state.userContextName,
            setName: this.state.setName,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tic-tac-toe" element={<Game />} />
              <Route
                path="/temperature-calculator"
                element={<TemperatureCalculator />}
              />
              <Route path="/product-table" element={<ProductTable />} />
            </Routes>
          </Suspense>
        </UserContext.Provider>
      </div>
    );
  }
}

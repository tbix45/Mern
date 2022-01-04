import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
      </p>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

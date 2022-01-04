import './App.css';
import React from 'react';
import Home from './Components/Home';
import User from './Components/User';
import Message from './Components/Message';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing Practice!</h1>
        <Link to="/home">Home</Link>
        |
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/:message/:txtcol/:backcol">
            <Message></Message>
          </Route>
          <Route exact path="/user/:id">
            <User></User>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <h1>Show on only the about page route!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

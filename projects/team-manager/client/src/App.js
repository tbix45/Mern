import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import AddPlayerForm from './components/AddPlayerForm';
import GameStatus from './components/GameStatus';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className='bg-dark'><Link to="/">Team Manager</Link></h1>
        <Link to="/">Manage Players</Link> |
        <Link to="/status"> Manage Player Status</Link>
        <Route exact path="/">
          <AllPlayers formSubmitted={formSubmitted} />
        </Route>
        <Route exact path="/addplayer">
          <AddPlayerForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />
        </Route>
        <Route exact path="/status">
          <GameStatus></GameStatus>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

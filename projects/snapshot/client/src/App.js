import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from "react-router-dom"
import SnapshotForm from './components/SnapshotForm';
import AllSnapshots from './components/AllSnapshots';
import OneSnapshotDetails from './components/OneSnapshotDetails';
import UpdateSnapshot from './components/UpdateSnapshot';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Link to="/" ><h1>SnapShot</h1></Link>
        </div>
        <Switch>

          <Route exact path="/">
            <div className="container">
              <div className="col-sm">
                <AllSnapshots formSubmitted={formSubmitted} />
              </div>
              <div className="col-lg-4">
                <SnapshotForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />
              </div>
            </div>
          </Route>

          <Route exact path="/api/snapshot/:id">
            <OneSnapshotDetails />
          </Route>

          <Route exact path="/api/snapshot/update/:id">
            <UpdateSnapshot formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

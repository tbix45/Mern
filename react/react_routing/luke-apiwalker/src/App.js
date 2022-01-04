import './App.css';
import Search from './Components/Search';
import Info from './Components/Info';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search></Search>
        <Switch>
          <Route path="/:category/:id"><Info></Info></Route>
          {/* <Route exact path="/planets/:id"><Planets></Planets></Route> */}

        </Switch>

      </BrowserRouter>
    </div >
  );
}

export default App;

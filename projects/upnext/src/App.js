import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import NavBar from './components/NavBar';
import WatchedPage from './components/WatchedPage';
import Watchlist from './components/Watchlist';
import AddPage from './components/AddPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Switch>

        <Route exact path="/">
          <Watchlist></Watchlist>
        </Route>

        <Route exact path="/watched">
          <WatchedPage></WatchedPage>
        </Route>

        <Route exact path="/add">
          <AddPage></AddPage>
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;

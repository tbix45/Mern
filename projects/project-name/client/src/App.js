import './App.css';
import AllArticles from './components/AllArticles';
import Search from './components/Search';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from "react-router-dom"
import OneArticle from './components/OneArticle';
import OneSearchedArticle from './components/OneSearchedArticle';

//key 7ca7a6ebf47d4ddeaa7e96a01620bc99

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" className="header"><h1>NEWS FOR YOU</h1></Link>
        <Switch>
          <Route exact path="/">
            <Search></Search>
            <AllArticles></AllArticles>
          </Route>

          <Route exact path="/searched">
            <Search></Search>
          </Route>

          <Route exact path="/article/:arrayloc">
            <OneArticle></OneArticle>
          </Route>

          <Route exact path="/sarticle/:arrayloc">
            <OneSearchedArticle></OneSearchedArticle>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

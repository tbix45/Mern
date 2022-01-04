import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from "react-router-dom"
import AllAuthors from './components/AllAuthors';
import OneAuthorDetails from './components/OneAuthorDetails';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path="/">
            <AllAuthors></AllAuthors>
          </Route>

          <Route exact path="/new">
            <AuthorForm></AuthorForm>
          </Route>

          <Route exact path="/api/author/:id">
            <OneAuthorDetails></OneAuthorDetails>
          </Route>

          <Route exact path="/api/author/update/:id">
            <UpdateAuthor></UpdateAuthor>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

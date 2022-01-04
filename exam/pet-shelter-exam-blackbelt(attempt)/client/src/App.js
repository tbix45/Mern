import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from "react-router-dom"
import AllPets from './components/AllPets';
import OnePetDetails from './components/OnePetDetails';
import PetForm from './components/PetForm';
import UpdatePet from './components/UpdatePet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Pet Shelter</h1>
        <Switch>

          <Route exact path="/">
            <AllPets></AllPets>
          </Route>

          <Route exact path="/new">
            <PetForm></PetForm>
          </Route>

          <Route exact path="/api/pet/:id">
            <OnePetDetails></OnePetDetails>
          </Route>

          <Route exact path="/api/pet/update/:id">
            <UpdatePet></UpdatePet>
          </Route>

        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Personcard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <h1 className="Title">Users List</h1>
      <div className="Content">
        <div className="Usercard">
          <Personcard
            firstName="Jane"
            lastName="Doe"
            age={20}
            hairColor="Brown"
            profession="Skier">
          </Personcard>
        </div>
        <div className="Usercard">
          <Personcard
            firstName="Smith"
            lastName="Wick"
            age={45}
            hairColor="Black"
            profession="Boater">
          </Personcard>
        </div>
        <div className="Usercard">
          <Personcard
            firstName="Millard"
            lastName="Fillmore"
            age={37}
            hairColor="Brown"
            profession="Lawyer">
          </Personcard>
        </div>
        <div className="Usercard">
          <Personcard
            firstName="Maria"
            lastName="Smith"
            age={63}
            hairColor="Red"
            profession="Coder">
          </Personcard>
        </div>

      </div>
    </div>
  );
}

export default App;

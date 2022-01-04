import './App.css';
import Personcard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <h1 className="Title">Users List</h1>
      <div className="Card">
        <Personcard
          firstName={"Jane"}
          lastName={"Doe"}
          age={40}
          hairColor={"Brown"}
          profession={"Coder"}>
          <p>
            No one knows her real name.
          </p>
        </Personcard>
      </div>
      <div className="Card">
        <Personcard
          firstName={"Smith"}
          lastName={"Wick"}
          age={88}
          hairColor={"Black"}
          profession={"Boater"}>
          <p>
            His brother is John Wick.
          </p>
        </Personcard>
      </div>
      <div className="Card">
        <Personcard
          firstName={"Millard"}
          lastName={"Fillmore"}
          age={55}
          hairColor={"Brown"}
          profession={"Lawyer"}>
        </Personcard>
      </div>
      <div className="Card">
        <Personcard
          firstName={"Maria"}
          lastName={"Smith"}
          age={60}
          hairColor={"Red"}
          profession={"Rocker"}>
        </Personcard>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from "react-router-dom"
import TaskList from './components/TaskList';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Task Manager</h1>
        <Switch>
          <Route exact path="/">
            <TaskList></TaskList>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

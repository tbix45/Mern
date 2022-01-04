import './App.css';
import Movielist from './components/Movielist';
import OneMovie from './components/OneMovie';

function App() {
  return (
    <div className="App">
      <h1>Movie Mashup</h1>
      <Movielist />
      <OneMovie />
    </div>
  );
}

export default App;

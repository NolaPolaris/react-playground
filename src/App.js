import ReactDOM from 'react-dom';
import './App.css';
import Greeting from './Greeting';
import Tick from './Tick.js';
import GreetingForm from './GreetingForm'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <GreetingForm/>
        <Greeting/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;

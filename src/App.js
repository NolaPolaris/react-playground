import ReactDOM from 'react-dom';
import profil from './assets/honest.jpg';
import './App.css';
import IdCard from './IdCard';
import Greeting from './Greeting';
import GreetingForm from './GreetingForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Button/>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Hero() {

  return (
      <header className="App-header">
        <GreetingForm/>
        <Greeting/>
        {/* <IdCard/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >      
        </a> */}
      </header>
   );
}
 
export default Hero;


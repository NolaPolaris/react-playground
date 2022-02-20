import ReactDOM from 'react-dom';
import profil from './assets/honest.jpg';
import './App.css';
import IdCard from './IdCard';


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
        <img src={profil} className="profil" alt="honest worker looking for an honest work" />
        <IdCard/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >      
        </a>
      </header>
   );
}

export default Hero;

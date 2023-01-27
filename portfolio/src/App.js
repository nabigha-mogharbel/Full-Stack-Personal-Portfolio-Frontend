import logo from './logo.svg';
import './App.css';
// import About from "./components/About"
// import Skills from "./components/Skills"
// import Projects from "./components/Projects"
// import Resume from "./components/Resume"
// import SideBar from "./components/SideBar"
// import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

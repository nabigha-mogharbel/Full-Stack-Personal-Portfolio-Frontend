import logo from './logo.svg';
import './App.css';
// import About from "./About_component/About"
// import Skills from "./Skills_component/Skills"
// import Projects from "./Projects_component/Projects"
// import Resume from "./Resume_component/Resume"
// import SideBar from "./Sidebar_component/SideBar"
// import Contact from "./Contact_component/Contact"


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
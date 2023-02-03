
import './App.css';
import About from "./About_component/About"
// import Skills from "./components/Skills"
import Projects from "./Project_Component/Projects"
// import Resume from "./components/Resume"

// import Contact from "./components/Contact"
import Sidebar from './Sidebar_component/Sidebar';


function App() {
  return (
    <div className="App"> 
    <About/>
    <Projects/>
    <Sidebar/>
    </div>
  );
}

export default App;

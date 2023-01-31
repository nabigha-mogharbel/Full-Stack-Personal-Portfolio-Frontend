
import './App.css';
// import About from "./components/About"
// import Skills from "./components/Skills"
import Projects from "./project_Component/Projects"
// import Resume from "./components/Resume"
// import SideBar from "./components/SideBar"
// import Contact from "./components/Contact"
import Sidebar from './Sidebar_component/Sidebar';


function App() {
  return (
    <div className="App"> 
    <Projects/>
    <Sidebar/>
    </div>
  );
}

export default App;

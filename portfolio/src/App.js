import logo from './logo.svg';
import './App.css';
// import About from "./About_component/About"
// import Skills from "./Skills_component/Skills"
// import Projects from "./Projects_component/Projects"
// import Resume from "./Resume_component/Resume"
// import SideBar from "./Sidebar_component/SideBar"
// import Contact from "./Contact_component/Contact"
import DashboardAbout from './pages/DashboardAbout';
// import DashboardProject from './pages/DashboardProjects';
import DashboardEducation from './Dashboard_education/Dashboardeducation';

function App() {
  return (
    <div className="App">
     {/* <DashboardProject /> */}
     <DashboardAbout/>
     <DashboardEducation/>
    </div>
  );
}

export default App;

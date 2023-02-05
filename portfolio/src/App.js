import logo from './logo.svg';
import './App.css';
// import About from "./About_component/About"
// import Skills from "./Skills_component/Skills"
// import Projects from "./Projects_component/Projects"
// import Resume from "./Resume_component/Resume"
// import SideBar from "./Sidebar_component/SideBar"
// import Contact from "./Contact_component/Contact"
import DashboardAbout from './pages/DashboardAbout';
import DashboardProject from './pages/DashboardProjects';
import DashboardEducation from './Dashboard_education/Dashboardeducation';
import Dashboardskills from './Dashboard_skills/Dashboard_skills';
import DashboardExpirience from './Dashboard_Expirence/Dashboard_Expirence';
import DashboardAdmin from "./Dashboard_Admin/Admin"

function App() {
  return (
    <div className="App">
     <DashboardProject />
     <DashboardAbout/>
     <DashboardEducation/>
     <Dashboardskills/>
     <DashboardExpirience/>
     <DashboardAdmin/>
    </div>
  );
}

export default App;

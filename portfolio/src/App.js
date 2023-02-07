import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio"
import DashboardAbout from "./pages/DashboardAbout"
import DashboardProjects from './pages/DashboardProjects';
import DashboardEducation from './pages/DashboardEducation';
import DashboardExperience from './pages/DashboardExperience';
import DashboardSkills from './pages/DashboardSkills';
import DashboardAdmin from './pages/DashboardAdmin';
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Portfolio />}/>
    <Route path="/dashboard/about" element={<DashboardAbout />}/>
    <Route path="/dashboard/projects" element={<DashboardProjects/>}/>
    <Route path="/dashboard/education" element={<DashboardEducation/>}/>
    <Route path="/dashboard/experience" element={<DashboardExperience/>}/>
    <Route path="/dashboard/skills" element={<DashboardSkills/>}/>
    <Route path="/dashboard/admin" element={<DashboardAdmin/>}/>
    <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

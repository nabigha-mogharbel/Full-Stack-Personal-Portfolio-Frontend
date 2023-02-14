import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Portfolio from "./pages/Portfolio"
import DashboardAbout from "./pages/DashboardAbout"
import DashboardProjects from './pages/DashboardProjects';
import DashboardEducation from './pages/DashboardEducation';
import DashboardExperience from './pages/DashboardExperience';
import DashboardSkills from './pages/DashboardSkills';
import DashboardAdmin from './pages/DashboardAdmin';
import Login from "./Login_component/Login"
import Error from "./pages/Error"
import NotAuth from "./pages/NotAuth"
import Cookies from "universal-cookie"

class App extends React.Component {
 constructor(props){
  super(props)
  this.state={
    
  }
 }


  render(){
    let url="https://ahmadbadawiportfolio.onrender.com"
    return (
      <> <p>{this.state.isAdmin&& <p>batata</p>}</p>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Portfolio backendLink={url}/>}/>
   <Route path="/dashboard/about" element={<AuthCheck><DashboardAbout backendLink={url} /></AuthCheck>}/>
    <Route path="/dashboard/projects" element={<AuthCheck ><DashboardProjects backendLink={url}/></AuthCheck>}/>
    <Route path="/dashboard/education" element={<AuthCheck ><DashboardEducation backendLink={url}/></AuthCheck>}/>
    <Route path="/dashboard/experience" element={<AuthCheck ><DashboardExperience backendLink={url}/></AuthCheck>}/>
    <Route path="/dashboard/skills" element={<AuthCheck ><DashboardSkills backendLink={url}/></AuthCheck>}/>
    <Route path="/dashboard/admin" element={<AuthCheck><DashboardAdmin backendLink={url}/></AuthCheck>}/>
    <Route path="/login" element={<Login backendLink={url} />} />
    <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter></>
  );}
}

export default App;

export class AuthCheck extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const cookie=new Cookies()
    let coo=" "
    coo=cookie.get("auth-token")
    if(coo===undefined){
      return <Navigate to="/login" />
    }
return this.props.children
  }
}
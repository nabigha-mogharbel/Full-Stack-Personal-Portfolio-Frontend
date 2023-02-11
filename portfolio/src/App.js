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
    isAdmin:false
  }
 }


  render(){
    let {auth}=this.state.isAdmin
    return (
      <> <p>{this.state.isAdmin&& <p>batata</p>}</p>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Portfolio />}/>
   <Route path="/dashboard/about" element={<AuthCheck><DashboardAbout /></AuthCheck>}/>
    <Route path="/dashboard/projects" element={<AuthCheck ><DashboardProjects/></AuthCheck>}/>
    <Route path="/dashboard/education" element={<AuthCheck ><DashboardEducation/></AuthCheck>}/>
    <Route path="/dashboard/experience" element={<AuthCheck ><DashboardExperience/></AuthCheck>}/>
    <Route path="/dashboard/skills" element={<AuthCheck ><DashboardSkills/></AuthCheck>}/>
    <Route path="/dashboard/admin" element={<AuthCheck><DashboardAdmin/></AuthCheck>}/>
    <Route path="/login" element={<Login />} />
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
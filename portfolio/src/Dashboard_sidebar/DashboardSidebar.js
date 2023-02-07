import React from "react";
import "./DashboardSidebar.css"
import {Link} from "react-router-dom"
export default class DashboardSidebar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isShown:true,
        }
        this.toggleSidebar=this.toggleSidebar.bind(this)
    }
    componentDidMount(){
        document.getElementsByClassName("nav-link")[this.props.linkIndex].classList.add("active");
        console.log(this.state.isShown)
    }
    toggleSidebar(){
       let sidebar= document.getElementById("dashboard-nav")
       let hideBtn=document.getElementById("side-hider")
       if(this.state.isShown===true) {
        console.log("lets hide")
        this.setState({isShown:false});  

    }
       else{
        this.setState({isShown:true});
    
    }
    }
  render() {
    return<>
     {this.state.isShown && <div id="dashboard-nav" className="dum">
        <button className="navbar-toggler" onClick={this.toggleSidebar}>Hide</button>
        <nav>
            <Link className="nav-link" to="/dashboard/about">About</Link>
            <Link className="nav-link" to="/dashboard/projects">Projects</Link>
            <Link className="nav-link" to="/dashboard/experience">Experience</Link>
            <Link className="nav-link" to="/dashboard/education">Education</Link>
            <Link className="nav-link" to="/dashboard/skills">Skills</Link>
        </nav>
        <hr />
        <Link className="nav-link" to="/dashboard/admin">My Account</Link>
    </div>}
    {!this.state.isShown && <button className="navbar-toggler hidden" id="side-hider" onClick={this.toggleSidebar}> Show</button>}
    </>;
  }
}
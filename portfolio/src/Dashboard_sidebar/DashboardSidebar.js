import React from "react";
import "./DashboardSidebar.css"
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
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Projects</a>
            <a className="nav-link" href="#">Experience</a>
            <a className="nav-link" href="#">Education</a>
            <a className="nav-link" href="#">Skills</a>
        </nav>
        <hr />
        <a className="nav-link" href="#">My Account</a>
    </div>}
    {!this.state.isShown && <button className="navbar-toggler hidden" id="side-hider" onClick={this.toggleSidebar}> Show</button>}
    </>;
  }
}
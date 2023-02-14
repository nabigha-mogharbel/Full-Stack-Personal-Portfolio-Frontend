import SideBar from "../Dashboard_sidebar/DashboardSidebar"
import Projects from "../Dashboard_projects/DashboardProjects"
import React from "react"
import "./DashboardLayout.css";
export default class DashboardAbout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="dashboard">
            <SideBar linkIndex={1} />
            <Projects backendLink={this.props.backendLink}/>
            </div>
        )
    }
}
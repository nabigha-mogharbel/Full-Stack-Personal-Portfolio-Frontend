import SideBar from "../Dashboard_sidebar/DashboardSidebar";
import Skills from "../Dashboard_skills/Dashboard_skills";
import React from "react";
import "./DashboardLayout.css";
export default class DashboardAbout extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
    render() {
    return (
      <div className="dashboard">
        <SideBar linkIndex={0} />
        <Skills backendLink={this.props.backendLink}/>
      </div>
    );
  }
}

import SideBar from "../Dashboard_sidebar/DashboardSidebar";
import Education from "../Dashboard_education/Dashboardeducation";
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
        <SideBar linkIndex={3} />
        <Education backendLink={this.props.backendLink}/>
      </div>
    );
  }
}

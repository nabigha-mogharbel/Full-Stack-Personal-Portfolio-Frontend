import SideBar from "../Dashboard_sidebar/DashboardSidebar";
import About from "../Dashboard_about/DashboardAbout";
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
      <div className="dashboard dashboard-about">
        <SideBar linkIndex={0} />
        <About backendLink={this.props.backendLink}/>
      </div>
    );
  }
}

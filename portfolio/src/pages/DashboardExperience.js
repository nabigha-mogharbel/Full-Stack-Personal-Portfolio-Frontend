import SideBar from "../Dashboard_sidebar/DashboardSidebar";
import Experience from "../Dashboard_Expirence/Dashboard_Expirence";
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
        <SideBar linkIndex={2} />
        <Experience />
      </div>
    );
  }
}

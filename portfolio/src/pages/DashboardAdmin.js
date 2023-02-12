import SideBar from "../Dashboard_sidebar/DashboardSidebar";
import Admin from "../Dashboard_Admin/Admin";
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
        <SideBar linkIndex={5} />
        <Admin />
      </div>
    );
  }
}

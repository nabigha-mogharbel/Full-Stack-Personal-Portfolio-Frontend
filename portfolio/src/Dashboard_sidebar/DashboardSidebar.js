import React from "react";
import "./DashboardSidebar.css";
import { Link } from "react-router-dom";
import menu from "../icons/bars-solid.svg";
import Logout from "../Logout_component/LogOut"
export default class DashboardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar() {
    if (this.state.isShown === true) {
      console.log("lets hide");
      this.setState({ isShown: false });
    } else {
      this.setState({ isShown: true });
    }
  }
  render() {
    const { isShown } = this.state;
    return (
      <>
        {isShown && (
          <div className="dashboard-nav">
            <button className="navbar-toggler">
              <p id="nav-close" onClick={this.toggleSidebar}>X</p>
            </button>
            <nav>
              <Link className="nav-link" to="/dashboard/about">
                About
              </Link>
              <Link className="nav-link" to="/dashboard/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/dashboard/experience">
                Experience
              </Link>
              <Link className="nav-link" to="/dashboard/education">
                Education
              </Link>
              <Link className="nav-link" to="/dashboard/skills">
                Skills
              </Link>
            </nav>
            <hr />
            <Link className="nav-link" to="/dashboard/admin">
              My Account
            </Link>
            <><Link className="nav-link" to={"/login"}><><Logout></Logout></></Link></>
          </div>
        )}

        {!isShown && (
          <button id="side-hider" onClick={this.toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="#FFFFFF"/>
            </svg>
          </button>
        )}
      </>
    );
  }
}

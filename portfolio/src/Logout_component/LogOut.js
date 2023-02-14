import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import Cookies from "universal-cookie";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      success: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogout = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const cookie = new Cookies();
    cookie.remove("auth-token");
    window.location.reload(false);
  };

  render() {
    return (
      <>
        <button className="nav-link" onClick={this.handleLogout}>
          Log Out
        </button>
      </>
    );
  }
}
export default LogOut;

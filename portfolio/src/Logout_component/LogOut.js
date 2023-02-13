import React, { Component } from "react";
import axios from "axios";
import './Login.css'
import Cookies from "universal-cookie"
import {history, redirect} from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      success: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogout = event => {
    event.preventDefault();
    const { username, password } = this.state;
    let url=process.env.REACT_APP_BASE_URL
    url="https://ahmadbadawiportfolio.onrender.com"
    axios
      .get(`${url}/admin/logout`)
        .then(response => {
          if (response) {
            Cookies.remove("auth-token");
            // redirect(/)
          }
        })
        .catch(error => {
          if (error) {
            console.log(error);
            this.setState({
              error: error.response.data
            });
          }
          alert(error.response.data);
        });
        
  };

  render() {
    return (
      
      <div >
 
 <button  className="btn" type="submit" onClick={this.handleLogout}>Log Out</button>

    </div>
    );
  }
}
export default Login;

import React, { Component } from "react";
import axios from "axios";
import './Login.css'
import Cookies from "universal-cookie"
import Login from '../Login_component/Login'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


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
 
 <button  className="btn" type="submit" onClick={this.handleLogout}>Log Out
 <Route path="/login" element={<Login />} />
 </button>

    </div>
    );
  }
}
export default LogOut;

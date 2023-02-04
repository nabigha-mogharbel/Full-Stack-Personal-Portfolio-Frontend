import React, { Component } from "react";
import axios from "axios";
import '../Login_component/Login.css'

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

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    axios
      .post("http://localhost:5000/admin/login", {
        username,
        password
      },{ headers: {
        'Content-Type': 'application/json',
        }})
        .then(response => {
          if (response) {
             // Handle successful login
            console.log(response)
            this.setState({success:response})
            this.props.onLogin(true);
            alert("Success")
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
      
      <div className="container">
      <form onSubmit={this.handleSubmit} >
        <p>Welcome</p>
        <input
          type="username"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        /><br />
        <input type="submit" value="Sign in" /><br />
      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
    );
  }
}
export default Login;

import "../Login_component/Login.css";
import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <input type="submit" placeholder="Submit" required />
          </form>

          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;

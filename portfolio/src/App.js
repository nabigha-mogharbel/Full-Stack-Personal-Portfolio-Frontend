import logo from "./logo.svg";
import "./App.css";
import Login from "./Login_component/Login";
// import About from "./About_component/About";
// import Skills from "./Skills_component/Skills";
// import Projects from "./Projects_component/Projects"
// import Resume from "./Resume_component/Resume"
// import SideBar from "./Sidebar_component/SideBar"
// import Contact from "./Contact_component/Contact"
// import Login from "./Login_component/Login"
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <>
        {!this.state.isLoggedIn ? (
          <Login onLogin={this.handleLogin} />
        ) : (
          <>
            {/* <About /> */}

          </>
        )}
      </>
    );
  }
}





export default App;

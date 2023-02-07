import React from "react";
import About from "../About_component/About";
import Project from "../Project_Component/Project";
import Resume from "../Resume_component/Resume";
import Contact from "../Contact_component/Contact";
import "./Portfolio.css";
import Sidebar from "../Sidebar_component/Sidebar";
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.initialY = 0;
  }
  handleScroll(e) {
    console.log("hhhiiii");
    if (e.deltaY > 0) {
      if (this.state.component === 3) {
        console.log("the end");
        return;
      } else {
        this.setState({ component: this.state.component + 1 });
      }
    }
    if (e.deltaY < 0) {
      if (this.state.component === 0) {
        console.log("the start");
        return;
      } else {
        this.setState({ component: this.state.component - 1 });
      }
    }
  }

  captureEnd = (event) => {
    let deltaY = event.changedTouches[0].screenY - this.initialY;
    if (deltaY > 0) {
      this.setState({ component: this.state.component + 1 });
    } else {
      this.setState({ component: this.state.component - 1 });
    }
  };
  captureStart = (event) => {
    console.log("cpture", event.touches[0].screenY);
    this.initialY = event.touches[0].screenY;
  };
  sidebarClick=(index)=>{
    this.setState({component:index})
  }
  components = [
    <About
      scroll={this.handleScroll}
      touchStart={this.captureStart}
      touchEnd={this.captureEnd}
    />,
    <Project
      scroll={this.handleScroll}
      touchStart={this.captureStart}
      touchEnd={this.captureEnd}
    />,
    <Resume
      scroll={this.handleScroll}
      touchStart={this.captureStart}
      touchEnd={this.captureEnd}
    />,
    <Contact
      scroll={this.handleScroll}
      touchStart={this.captureStart}
      touchEnd={this.captureEnd}
    />,
  ];
  render() {
    return (
      <div className="portfolio" onWheel={this.handleScroll}>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        {this.components[this.state.component]}
        <Sidebar click={this.sidebarClick} />
      </div>
    );
  }
}

import React from "react"
import About from "../About_component/About"
import Project from "../Project_Component/Project"
import Resume from "../Resume_component/Resume"
import Contact from "../Contact_component/Contact"
import Sidebar from "../Sidebar_component/Sidebar"
import Skills from "../Skills_component/Skills"
import axios from "axios"
import "./Portfolio.css";
import Loading from "../loading/loading"
export default class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state = 
        {
            Portfolio:[],
            isLoaded:false,
            component: 0,

        }
        this.handleScroll = this.handleScroll.bind(this);
        this.initialY = 0;
    }
    componentDidMount() {
        this.getData();
      }
    getData = async () => {
        try {
          const response = await axios.get(
             `${this.props.backendLink}/dashboard/portfolio`
          );
          this.setState({ Portfolio: response.data.response[0], isLoaded:true});
          console.log("klshi data", this.state.Portfolio)

        this.components=[<About
          scroll={this.handleScroll}
          touchStart={this.captureStart}
          touchEnd={this.captureEnd}
          aboData={this.state.Portfolio.about[0]}
          linkData={this.state.Portfolio.link}
        />,
        <Project
          scroll={this.handleScroll}
          touchStart={this.captureStart}
          touchEnd={this.captureEnd}
          proData={[...this.state.Portfolio.project]}
        />,
        <Skills
        scroll={this.handleScroll}
        touchStart={this.captureStart}
        touchEnd={this.captureEnd}
        skillData={[...this.state.Portfolio.skill]}
      />,
        <Resume
          scroll={this.handleScroll}
          touchStart={this.captureStart}
          touchEnd={this.captureEnd}
          expData={[...this.state.Portfolio.experience]}
          eduData={[...this.state.Portfolio.education]}
        />,
        <Contact
          scroll={this.handleScroll}
          touchStart={this.captureStart}
          touchEnd={this.captureEnd}
        />,]
          console.log(response.data.response[0]);
        } catch (error) {
          console.error(error);
          this.setState({isLoaded:false});
        }
      };
    
  handleScroll(e) {
    console.log("hhhiiii");
    if (e.deltaY > 0) {
      if (this.state.component === 4) {
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
  components = [];
  render() {
    return (
      <div className="portfolio" onWheel={this.handleScroll}>
        {this.state.isLoaded&&<><div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div></>}
        {!this.state.isLoaded && <Loading></Loading>}
        {this.state.isLoaded && this.components[this.state.component]}
        {this.state.isLoaded&&<Sidebar click={this.sidebarClick} />}
      </div>
    );
  }
}

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
             `https://ahbadawiport.onrender.com/dashboard/portfolio`
          );
          this.setState({ Portfolio: response.data.response[0]});
          this.setState({isLoaded:true})
        } catch (error) {
          this.setState({isLoaded:false});
        }
      };
    
  handleScroll(e) {
    if (e.deltaY > 0) {
      if (this.state.component === 4) {
        return;
      } else {
        this.setState({ component: this.state.component + 1 });
      }
    }
    if (e.deltaY < 0) {
      if (this.state.component === 0) {
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
        {this.state.isLoaded && 
        <>
        {this.state.component===0 && <About
          scroll={this.handleScroll}
          touchStart={this.captureStart}
          touchEnd={this.captureEnd}
          aboData={this.state.Portfolio.about[0]}
          linkData={this.state.Portfolio.link}
        />}
         {this.state.component===1 && <Project
          scroll={this.handleScroll}
          touchStart={this.captureStart}
          touchEnd={this.captureEnd}
          proData={[...this.state.Portfolio.project]}
        />}
        {this.state.component===2 && <Skills
        scroll={this.handleScroll}
        touchStart={this.captureStart}
        touchEnd={this.captureEnd}
        skillData={[...this.state.Portfolio.skill]}
      />}
      {this.state.component===3&&<Resume
          scroll={this.handleScroll}
          touchStart={this.captureStart}
          touchEnd={this.captureEnd}
          expData={[...this.state.Portfolio.experience]}
          eduData={[...this.state.Portfolio.education]}
        />}
        {this.state.component===4 &&<Contact
          scroll={this.handleScroll}
          touchStart={this.captureStart}
          touchEnd={this.captureEnd}
        />}
        </>
        }
        {this.state.isLoaded && <Sidebar click={this.sidebarClick} />}
      </div>
    );
  }
}

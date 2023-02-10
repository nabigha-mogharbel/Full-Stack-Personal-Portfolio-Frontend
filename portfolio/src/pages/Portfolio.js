import React from "react"
import About from "../About_component/About"
import Projects from "../Project_Component/Projects"
import Resume from "../Resume_component/Resume"
import Contact from "../Contact_component/Contact"
import Sidebar from "../Sidebar_component/Sidebar"
import axios from "axios"

export default class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state = 
        {
            Portfolio:[]
        }
    }
    componentDidMount() {
        this.getData();
      }
    getData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/dashboard/portfolio/`
          );
          this.setState({ Portfolio: response.data.response[0]});
        
          console.log(response.data.response[0]);
        } catch (error) {
          console.error(error);
        }
      };
    
    render(){
      // console.log("hello"+this.state.Portfolio.education)
        return(<>
            <About about={this.state.Portfolio.about} />
            <Sidebar/>
            <Projects project={this.state.Portfolio.project}/>
            <Resume  education={this.state.Portfolio.education}  experience={this.state.Portfolio.experiences} />
            <Contact/>
            </>
        )
    }
}
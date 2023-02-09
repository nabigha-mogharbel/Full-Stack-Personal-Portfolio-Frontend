import React from "react";
import "../Dashboard_skills/skills.css";
import Skills from "./skills";
import axios from "axios";

class DashbordSkills extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/dashboard/skills/`
      );
      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div className="education">
        <h1>Skills</h1>
        <hr />
        <div className="container">
          {this.state.data.map((ele) => {
            return <Skills skil={ele} key={ele._id} />;
          })}
    state = { skills:[
        {
          _id: "63d02982843d1d80f13480f2",
          name: "yeiyha",
          percentage: 77,
          __v: 0
        },
        {
          _id: "63d029c27d4d73ab5ec5b721",
          name: "mazen",
          percentage: 29,
          __v: 0
        },
        {
          _id: "63d5681fd39aa64d155e89bf",
          name: "javascript",
          percentage: 70,
          __v: 0
        }
      ] }


    render() { 
        return ( <div className="dashboard-section">
        <h1>Skills</h1><hr />
        <div className="container-column">{this.state.skills.map((ele)=>{
            return   <Skills skil={ele} key={ele._id}/>
        })}
          
        </div>
      </div>
    );
  }
}

export default DashbordSkills;

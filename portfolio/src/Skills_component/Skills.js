import axios from "axios";
import React from "react";
import "../Skills_component/Skills.css";

import SkillsProgress from "./SkillsProgress";
  
  class Skill extends React.Component{
    constructor(props) {
      super(props);
  
    this.state =  {
      skills :
        [
          {
            _id: "63d574747161f0aa819ddc2d",
            name: "potato-chips",
            percentage: 88,
            __v: 0
          },
          {
            _id: "63d574e3de5b8d4add69d065",
            name: "potato",
            percentage: 100,
            __v: 0
          },
          {
            _id: "63d574e3de5b8d4add69d065",
            name: "motato",
            percentage: 40,
            __v: 0
          }
          ,
          {
            _id: "63d574e3de5b8d4add69d065",
            name: "fotato",
            percentage: 55,
            __v: 0
          }

        ]
      
    }
  
}
  

  getData = () => {
    axios
      .get("http://localhost:5000/dashboard/skills/")
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data.response });
      })
      .catch((error) => {
        this.setState({ error: error });
        console.error(error);
      });
  };
  updateData = (id, updatedData) => {
    console.log(id, updatedData);
    console.log(typeof id);
    axios
      .put(`http://localhost:5010/dashboard/skills/update/${id}`, updatedData, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("hello ");
        this.getData();
      })
      .catch((error) => {
        console.log("hello error ");

        console.error(error);
      });
  };

  deleteData = (id) => {
    axios
      .delete(`http://localhost:5010/dashboard/skills/delete/${id}`)
      .then((res) => {
        this.getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  
  render() {

    return (
      <div className="all_Skills">
      <div className="SkillsProgress">
        {this.state.skills.map ((ele)=>{
        return  <SkillsProgress skil ={ele} key={this.state._id}/>
      })}
      </div>
    </div>
    );
  }
}
  
export default Skill;


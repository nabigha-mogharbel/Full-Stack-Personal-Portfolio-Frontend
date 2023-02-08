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
        </div>
      </div>
    );
  }
}

export default DashbordSkills;

import React from "react";
import "../Dashboard_skills/skills.css";
import Skills from "./skills";
import axios from "axios";
import send from "../send.svg";

class DashbordSkills extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    name: "",
    percentage: "",
    isEditMode: false,
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5010/dashboard/skills/`
      );
      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  addSkillData = (e) => {
    e.preventDefault();
    const newSkill = {
      name: this.state.name,
      percentage: this.state.percentage

    };
    console.log("Newwwww" + {newSkill});
    try {
      const response = axios.post(
        `http://localhost:5010/dashboard/skills/create`,
        newSkill
      );

      console.log("Done");
      this.getData()
    } catch (error) {
      console.error(error);
    }
  };

  toggleEdit = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
    if (!this.state.isEditMode) {
      // this.setState({
      //   name: "",
      //   percentage: "",
      // });
    }
  };
  handleInput = (event, key) => {
    this.setState({ [key]: event.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="dashboard-section">
        <h1>Skills</h1>
        <hr />
        {!this.state.isEditMode && (
          <div className="container -column">
            {this.state.data.map((ele) => {
              return <Skills skil={ele} key={ele._id} />;
            })}
            <button onClick={this.toggleEdit} className="dashboard-btns edit">
              +
            </button>
          </div>
            )}

            {this.state.isEditMode && (
              <section>
                <form
                  className="container-column"
                  onSubmit={this.addSkillData}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={(e) => this.handleInput(e, "name")}
                  />
                  <label htmlFor="percentage">percentage {this.state.percentage}</label>
                  <input
                    type="range"
                    name="percentage"
                    id="percentage"
                    value={this.state.percentage}
                    onChange={(e) => this.handleInput(e, "percentage")}
                  />

                  <div className="container-row">
                    <button type="submit" className="dashboard-btns edit">
                      <img
                        src={send}
                        width="20px"
                        
                      />
                    </button>
                    <button
                      onClick={this.toggleEdit}
                      className="dashboard-btns cancel"
                  onSubmit={this.addSkillData}
                      
                    >
                      X
                    </button>
                  </div>
                </form>
              </section>
            )}
        
      </div>
    );
  }
}

export default DashbordSkills;

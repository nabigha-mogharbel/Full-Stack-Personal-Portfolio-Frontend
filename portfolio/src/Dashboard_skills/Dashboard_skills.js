import React from "react";
import "../Dashboard_skills/skills.css";
import Skills from "./skills";
import axios from "axios";
import send from "../send.svg";
import Cookies from "universal-cookie"
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
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.get(
        `${this.props.backendLink}/dashboard/skills/`, {headers:{"auth-token":bearer}}
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
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = axios.post(
        `${this.props.backendLink}/dashboard/skills/create`, newSkill,{headers:{"auth-token":bearer }},
        
      );

      console.log("Done");
      window.location.reload(false)
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
  };

  render() {
    return (
      <div className="dashboard-section">
        <h1>Skills</h1>
        <hr />
        {!this.state.isEditMode && (
          <div className="container-column">
            {this.state.data.map((ele) => {
              return <Skills backendLink={this.props.backendLink} skil={ele} key={ele._id} />;
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

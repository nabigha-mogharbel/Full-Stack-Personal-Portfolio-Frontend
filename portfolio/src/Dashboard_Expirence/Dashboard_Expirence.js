import React from "react";
import Expireience from "./Expiences";
import "../Dashboard_Expirence/Expirence.css";
import axios from "axios";
import send from "../send.svg";

class DashboardExpirience extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    name: "",
    companyName: "",
    description: "",
    startDate: "",
    endDate: "",
    isEditMode: false,
  };
  toggleEdit = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
    if (!this.state.isEditMode) {
      this.setState({
        name: "",
        companyName: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    }
  };
  handleInput = (event, key) => {
    this.setState({ [key]: event.target.value });
    console.log(this.state);
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {



    try {
      const response = await axios.get(
        `https://ahmadbadawiportfolio.onrender.com/dashboard/experience/`
      );
      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  addExperienceData = (e) => {
    e.preventDefault();
    const newExperience = {
      name: this.state.name,
      companyName: this.state.companyName,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      description: this.state.description
    };
    console.log("Newwwww" + {newExperience});



    try {
      const response = axios.post(
        `https://ahmadbadawiportfolio.onrender.com/dashboard/experience/create`,
        newExperience
      );

      console.log("Done");
      this.getData()
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="dashboard-section">
        <h1>Experience</h1>
        <hr />
        {!this.state.isEditMode && (
          <>
            {" "}
            <main className="container-column">
              {this.state.data.map((objec) => {
                return <Expireience Expir={objec} key={objec._id} />;
              })}
            </main>{" "}
            <button onClick={this.toggleEdit} className="dashboard-btns edit">
              +
            </button>
          </>
        )}
        {this.state.isEditMode && (
          <section>
            <form className="container-column" onSubmit={this.addExperienceData}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.major}
                onChange={(e) => this.handleInput(e, "name")}
              />
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={this.state.degree}
                onChange={(e) => this.handleInput(e, "companyName")}
              />
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={this.state.institute}
                onChange={(e) => this.handleInput(e, "description")}
              />
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={this.state.institute}
                onChange={(e) => this.handleInput(e, "startDate")}
              />
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={this.state.institute}
                onChange={(e) => this.handleInput(e, "endDate")}
              />
              <div className="container-row">
                <button type="submit" className="dashboard-btns edit">
                  <img src={send} width="20px" onClick={this.addExperienceData} />
                </button>
                <button
                  onClick={this.toggleEdit}
                  className="dashboard-btns cancel"
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

export default DashboardExpirience;

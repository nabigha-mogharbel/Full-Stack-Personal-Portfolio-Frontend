import React from "react";
import "../Dashboard_education/Dashboardeducation.css";
import Education from "./Education_view";
import send from "../send.svg";

class DashboardEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          _id: "63cfe11a916be585e47fc9ae",
          major: "hello",
          institute: "bro",
          degree: "ts2",
          __v: 0,
          startDate: 3 + "/" + 5 + "/" + 2019,
          endDate: 8 + "/" + 3 + "/" + 2022,
        },
        {
          _id: "63cfe11a916be585e47fc9a1",
          major: "hii",
          institute: "bro",
          degree: "ts2",
          __v: 0,
          startDate: 1 + "/" + 3 + "/" + 2020,
          endDate: 2 + "/" + 22 + "/" + 2020,
        },
      ],
      isEditMode: false,
      major: "",
      degree: "",
      institute: "",
      startDate: "",
      endDate: "",
    };
  }
  toggleEdit = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
    if (!this.state.isEditMode) {
      this.setState({ bio: "", expertise: "" });
    }
  };
  handleInput = (event, key) => {
    this.setState({ [key]: event.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <div className="dashboard-section">
        <h1>Education</h1>
        <hr />

        {!this.state.isEditMode && (
          <>
            <div className="container-column">
              {this.state.education.map((ele) => {
                return <Education edu={ele} key={ele._id} />;
              })}
            </div>
            <button
              onClick={this.toggleEdit}
              className="dashboard-btns edit"
              style={{ fontSize: "24px" }}
            >
              +
            </button>
          </>
        )}

        {this.state.isEditMode && (
          <section>
            <form className="container-column" onSubmit={this.submitAbout}>
              <label htmlFor="major">Major</label>
              <input
                type="text"
                name="major"
                id="major"
                value={this.state.major}
                onChange={(e) => this.handleInput(e, "major")}
              />
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                name="degree"
                id="degree"
                value={this.state.degree}
                onChange={(e) => this.handleInput(e, "degree")}
              />
              <label htmlFor="institute">Institute</label>
              <input
                type="text"
                name="institute"
                id="institute"
                value={this.state.institute}
                onChange={(e) => this.handleInput(e, "institute")}
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
                  <img src={send} width="20px" />
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

export default DashboardEducation;

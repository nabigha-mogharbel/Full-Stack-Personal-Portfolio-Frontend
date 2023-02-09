import React from "react";
import "../Dashboard_education/Dashboardeducation.css";
import Education from "./Education_view";
import send from "../send.svg";
import axios from "axios";

class DashboardEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isEditMode: false,
      major: "",
      degree: "",
      institute: "",
      startDate: "",
      endDate: "",
    };
  }
    componentDidMount() {
        this.getData();
      }
      getData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5010/dashboard/education/`
          );
          this.setState({ data: response.data.response });
          console.log(response.data.response);
        } catch (error) {
          console.error(error);
        }
      };
      
      addEducationData = async () => {
        const newEduation = {
          major: this.state.major,
          degree: this.state.degree,
          startDate: this.state.startDate,
          endDate: this.state.endDate ,
        };
        console.log("Newwwww"+newEduation )
        try {
          const response = await axios.post(
            `http://localhost:5010/dashboard/education/create`,
            newEduation , headers{
              'Content-Type': 'application/json',
            },
          );
    
          this.setState({ data: response.data.response });
          console.log("Done"+response.data.response);
        } catch (error) {
          console.error(error);
        }
      };

      toggleEdit = () => {
        this.setState({ isEditMode: !this.state.isEditMode });
        if (!this.state.isEditMode) {
        }
      };

      // handleInput = (event, key) => {
      //   this.setState({ [key]: event.target.value });
      //   console.log(this.state.$[key]);
      // };
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        })
        //  console.log(this.state.$[event.target.name]);;
      };
  render() {
    return (
      <div className="dashboard-section">
        <h1>Education</h1>
        <hr />

        {!this.state.isEditMode && (
          <>
            <div className="container-column">
              {this.state.data.map((ele) => {
                return <Education edu={ele} key={ele._id} refresh={this.ge}/>;
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
            <h2> Add New Education</h2>
            <form className="container-column" onSubmit={this.addEducationData}>
              <label htmlFor="major">Major</label>
              <input
                type="text"
                name="major"
                id="major"
                value={this.state.major}
                onChange={this.handleChange}
              />
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                name="degree"
                id="degree"
                value={this.state.degree}
                onChange={this.handleChange}
              />
              <label htmlFor="institute">Institute</label>
              <input
                type="text"
                name="institute"
                id="institute"
                value={this.state.institute}
                onChange={this.handleChange}
              />
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={this.state.startDate}
                onChange={this.handleChange}
              />
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={this.state.endDate}
                onChange={this.handleChange}
              />
              <div className="container-row">
                <button type="submit" className="dashboard-btns edit" onSubmit={this.addEducationData}>
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

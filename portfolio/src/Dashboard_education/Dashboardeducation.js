import React from "react";
import "../Dashboard_education/Dashboardeducation.css";
import Education from "./Education_view";
import send from "../send.svg";
import axios from "axios";
import Cookies from "universal-cookie"
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
      success:false,
    failed:false,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")    
    try {
      const response = await axios.get(
        `${this.props.backendLink}/dashboard/education/`, {headers:{"auth-token": bearer }}
      );
      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  addEducationData = async (e) => {
    e.preventDefault();
    const newEduation = {
      major: this.state.major,
      degree: this.state.degree,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      institute: this.state.institute
    };
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.post(
        `${this.props.backendLink}/dashboard/education/create`,
        newEduation, {headers:{"auth-token": bearer }}
      );
      this.setState({success:true,failed:false});
      window.location.reload(false)
    } catch (error) {
      this.setState({success:false,failed:true});
    }
  };

  toggleEdit = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
    if (!this.state.isEditMode) {
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="dashboard-section">
        <h1>Education</h1>
        <hr />
        {this.state.success && (
              <div
                className="alert alert-success"
                role="alert"
                style={{
                  width: "80%",
                  margin: "20px auto",
                  color: "#3c763d",
                  backgroundColor: "#dff0d8",
                }}
              >
                <strong>Well done!</strong> All Procedure has been successfully.
              </div>
            )}
            {this.state.failed && (
              <div
                className="alert alert-success"
                role="alert"
                style={{
                  width: "80%",
                  margin: "20px auto",
                  color: "#FF5733",
                  backgroundColor: "#EFAC9E",
                }}
              >
                <strong>Alert!</strong> Somthings  has been unSuccessfully!!!!!!
              </div>
            )}
        {!this.state.isEditMode && (
          <>
            <div className="container-column">
              {this.state.data.map((ele) => {
                return <Education backendLink={this.props.backendLink} edu={ele} key={ele._id} refresh={this.ge} />;
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
                <button type="submit" className="dashboard-btns edit">
                  <img
                    src={send}
                    width="20px"
                    onSubmit={this.addEducationData}
                  />
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

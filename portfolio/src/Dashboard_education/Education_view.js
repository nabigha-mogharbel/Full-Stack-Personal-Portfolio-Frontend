import React from "react";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";
import axios from "axios";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isvisible: true,
      id: this.props.edu._id,
      data: {
        major: this.props.edu._major,
        institute: this.props.edu.institute,
        degree: this.props.edu.degree,
        startDate: this.props.edu.startDate,
        endDate: this.props.edu.endDate,
      },
    };
  }
  handleChange = (event) => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.updateData(this.state.data, this.state.id);
  };
  updateData = async () => {
    let id = this.state.id;
    const educationData = {
      major: this.state.data.major,
      startDate: this.state.data.startDate,
      endDate: this.state.data.endDate,
      institute: this.state.data.institute,
      degree: this.state.data.degree,
    };
    console.log(educationData + "\n" + id);
    try {
      const response = await axios.put(
        `http://localhost:5001/dashboard/education/update/${id}`,
        educationData
      );

      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };
  toggelvisible = () => {
    this.setState({ isvisible: false });
    if (this.state.isvisible == false) {
      this.setState({ isvisible: true });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateData(this.state.data, this.state.id);
  };

  deleteData = async (id) => {
    id = this.state.id
    try {
      const response = await axios.delete(
        `http://localhost:5000/dashboard/education/delete/${id}`
      );
      console.log(response.data.response);
      console.log("Hello, ");
      this.props.refresh()
    } catch (error) {
      console.log("error deleting dashboard", error);
      console.error(error);
    }
  };

  formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  render() {
    return (
      <div className="educationcard">
        <div className="information">
          <div className="info">
            <h3>
              {this.props.edu.major}
             Magor : {this.props.edu.major}
              <br></br>
              Degree : {this.props.edu.degree}
              <br></br>
              Institute : {this.props.edu.institute}
              <br></br>
              StarDate : {this.formatDate(this.props.edu.startDate)}
              <br></br>
              EndDate: {this.formatDate(this.props.edu.endDate)}
            </h3>
          </div>
          <div className="editanddelet">
            <button onClick={this.toggelvisible}>
              <img src={edit} alt=""></img>
            </button>
            <button  >
              <img src={trash} alt="" onClick={this.deleteData}></img>
            </button>
          </div>
        </div>
        {!this.state.isvisible && (
          <div className="editinformation">
            <div className="allinfo">
                <form onSubmit={this.handleSubmit}>
              <label htmlFor="major">Major</label>
              <input
                type="text"
                name="major"
                value={this.state.data.major}
                onChange={this.handleChange}
              />
              <label htmlFor="degre">Degre</label>
              <input
                type="text"
                name="degree"
                value={this.state.data.degree}
                onChange={this.handleChange}
              />
              <label htmlFor="institute">institute</label>
              <input
                type="text"
                name="institute"
                value={this.state.institute}
                onChange={this.handleChange}
              />
              <label htmlFor="StartDate">StartDate</label>
              <input
                type="date"
                name="startDate"
                id="startdate"
                value={this.state.data.startDate}
                onChange={this.handleChange}
              />
              <label htmlFor="EndDate">EndDate</label>
              <input
                type="Date"
                value={this.state.data.endDate}
                onChange={this.handleChange}
                name="endDate"
              />
            

            <div className="submit">
              <button onClick={this.handleSubmit}>
                <img src={send} alt="" />
              </button>
            </div>
            </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Education;

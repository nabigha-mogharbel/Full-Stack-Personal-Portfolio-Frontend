import React from "react";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";
import axios from "axios";
import Cookies from "universal-cookie"
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
      success:false,
      failed:false,
      
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

    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.put(
        `${this.props.backendLink}/dashboard/education/update/${id}`,
        educationData,{headers:{"auth-token": bearer }}
      );

      this.setState({ data: response.data.response });
      this.setState({success:true,failed:false});

      console.log(response.data.response);
    } catch (error) {
      console.error(error);
      this.setState({success:false,failed:true});

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
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.delete(
        `${this.props.backendLink}/dashboard/education/delete/${id}`, {headers:{"auth-token": bearer }}
      );
      console.log(response.data.response);
      console.log("Hello, ");
      window.location.reload(false)
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
      <div className="dashboard-card">
        <div className="container-row-to-col flex-center">
          <div className="info">
            
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
            

            <h3>
              {this.props.edu.major}
            </h3>
            <p>
              {this.props.edu.degree}
            </p>
            <p>
{this.props.edu.institute}
</p>
<p>
{this.formatDate(this.props.edu.startDate)}

              </p>
              <p>
              {this.formatDate(this.props.edu.endDate)}
            </p>
          </div>
          <div className="container-column-to-row">
            <button className="dashboard-btns edit"onClick={this.toggelvisible}>
              <img src={edit} alt=""></img>
            </button>
            <button className="dashboard-btns delete"  >
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
              <label htmlFor="degre">Degree</label>
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
            

            <div className="dashboard-btns edit">
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

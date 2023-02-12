import React from "react";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";
import axios from "axios";
class Expirence extends React.Component {
  state = {
    isvisible: true,
    id: this.props.Expir._id,
    data: {
      name: this.props.Expir._name,
      startDate: this.props.Expir.StartDate,
      endDate: this.props.Expir.EndDate,
      companyName: this.props.Expir.CompanyName,
      description: this.props.Expir.Description,
    },
  };
  toggelvisible = () => {
    this.setState({ isvisible: false });
    if (this.state.isvisible == false) {
      this.setState({ isvisible: true });
    }
  };
  updateData = async (data, id) => {
    id = this.state.id;
    const experienceData = {
      name: this.state.data.name,
      startDate: this.state.data.startDate,
      endDate: this.state.data.endDate,
      companyName: this.state.data.companyName,
      description: this.state.data.description,
    };
    console.log(experienceData + "\n" + id);
    try {
      const response = await axios.put(
        `http://localhost:5000/dashboard/experience/update/${id}`,
        experienceData
      );
      window.location.reload(false)
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  deleteData = async (id) => {
    id = this.state.id;
    try {
      const response = await axios.delete(
        `http://localhost:5000/dashboard/experience/delete/${id}`
      );
      console.log(response.data.response);
      window.location.reload(false)
    } catch (error) {
      console.log("error deleting dashboard", error);
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.updateData(this.state.data, this.state.id);
  };

  formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  render() {
    return (
      <div className="dashboard-card">
        <div className="container-row">
          <div className="container-column">
            <h3>{this.props.Expir.name}</h3>
            <h3>{this.props.Expir.companyName}</h3>
            <h3>{this.formatDate(this.props.Expir.startDate)}</h3>
            <h3> {this.formatDate(this.props.Expir.endDate)}</h3>
          </div>
          {/* <div className="container-column">
            <h3>{this.props.Expir.name}</h3>
            <h3> {this.props.Expir.companyName}</h3>
            <h3> {this.props.Expir.startDate}</h3>
            <h3> {this.props.Expir.endDate}</h3>
          </div> */}
          {this.state.isvisible && (
            <div className="container-column">
              <button
                onClick={this.toggelvisible}
                className="dashboard-btns edit"
              >
                <img src={edit} alt=""></img>
              </button>
              <button className="dashboard-btns cancel">
                <img src={trash} alt="DeleteMe" onClick={this.deleteData}></img>
              </button>
            </div>
          )}
        </div>
        {!this.state.isvisible && (
              <form onSubmit={this.handleSubmit} className="editinformation">
                <div className="container-row-to-col">
                <label htmlFor="major">Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.data.name}
                  onChange={this.handleChange}
                />
                </div>
                <div className="container-row-to-col">
                <label htmlFor="degre">companyName</label>
                {console.log(this.state.data.name)}
                {console.log("jhhhihihihj" + this.props.Expir.CompanyName)}
                <input
                  type="text"
                  name="companyName"
                  value={this.state.data.companyName}
                  onChange={this.handleChange}
                />
                </div>
                <div className="container-row-to-col">
                <label htmlFor="degre">startDate</label>
                <input
                  type="date"
                  name="startDate"
                  value={this.state.data.startDate}
                  onChange={this.handleChange}
                />
                </div>
                <div className="container-row-to-col">
                <label htmlFor="degre">endDate</label>
                <input
                  type="date"
                  name="endDate"
                  value={this.state.data.endDate}
                  onChange={this.handleChange}
                />
                </div>
                <div className="container-row-to-col">
                <label htmlFor="degre">description</label>
                <input
                  type="text"
                  name="description"
                  value={this.state.data.description}
                  onChange={this.handleChange}
                />
                </div>
                <div className="container-row">
                <button type="submit" value="Update" className="dashboard-btns send">
                  <img src={send} alt="" onSubmit={this.updateData} />
                </button>
                <button
                onClick={this.toggelvisible}
                className="dashboard-btns cancel"
              >
                X
              </button>
              </div>
              </form>
        )}
      </div>
    );
  }
}

export default Expirence;

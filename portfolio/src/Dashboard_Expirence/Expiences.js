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
    
      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
    
  };

  deleteData = async (id) => {
    id = this.state.id
    try {
      const response = await axios.delete(
        `http://localhost:5000/dashboard/experience/delete/${id}`
      );
      console.log(response.data.response);
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

 formatDate=(date) =>{
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };  
  render() {
    // alert(this.state.data.name)
    const { Expir } = this.props;
    console.log("Expir: ", Expir.name);


class Expirence extends React.Component {
  state = {
    isvisible: true,
  };
  toggelvisible = () => {

        this.setState({ isvisible: !this.state.isvisible });

      
    
  };

  render() {
    return (
      <div className="dashboard-card">
        <div className="container-row">
          <div className="container-column">
            <h3>Name :{this.props.Expir.name}</h3>
            <h3>Compagny : {this.props.Expir.companyName}</h3>
            <h3> StartDay: {this.formatDate(this.props.Expir.startDate)}</h3>
            <h3> End Date: {this.formatDate(this.props.Expir.endDate)}</h3>
            <p> Description: {this.props.Expir.description}</p>
          </div>
          <div className="container-column">
            <h3>{this.props.Expir.name}</h3>
            <h3> {this.props.Expir.companyName}</h3>
            <h3> {this.props.Expir.startDate}</h3>
            <h3> {this.props.Expir.endDate}</h3>
          </div>
          {this.state.isvisible && <div className="container-column">
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
        </div>
        {!this.state.isvisible && (
          <div className="editinformation">
            <div className="allinfo">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="major">Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.data.name}
                  onChange={this.handleChange}
                />
                <label htmlFor="degre">companyName</label>
                {console.log(this.state.data.name)}
                {console.log("jhhhihihihj"+this.props.Expir.CompanyName)}
                <input
                  type="text"
                  name="companyName"
                  value={this.state.data.companyName}
                  onChange={this.handleChange}
                />
                <label htmlFor="degre">startDate</label>
                <input
                  type="date"
                  name="startDate"
                  value={this.state.data.startDate}
                  onChange={this.handleChange}
                />
                <label htmlFor="degre">endDate</label>
                <input
                  type="date"
                  name="endDate"
                  value={this.state.data.endDate}
                  onChange={this.handleChange}
                />
                <label htmlFor="degre">description</label>
                <input
                  type="text"
                  name="description"
                  value={this.state.data.description}
                  onChange={this.handleChange}
                />
                <button type="submit" value="Update" className="submit">
                  <img src={send} alt="" />
                </button>
              </form>
            </div>
          </div>
              <img src={trash} alt=""></img>
            </button>
          </div>}
        </div>
        {!this.state.isvisible && (
          <form className="editinformation">
            <div className="container-row-to-col">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="container-row-to-col">
              <label htmlFor="companyName">companyName</label>
              <input type="text" id="companyName" />
            </div>
            <div className="container-row-to-col">
              <label htmlFor="description">description</label>
              <input type="text" id="description" />
            </div>
            <div className="container-row-to-col">
              <label htmlFor="startDate">startDate</label>
              <input type="date" id="startDate" value={this.state.startDate} />
            </div>
            <div className="container-row-to-col">
              <label htmlFor="endDate">endDate</label>
              <input type="date" id="endDate" value={this.state.endDate} />
            </div>

            <div className="container-row">
              <button type="submit" className="dashboard-btns edit">
                <img src={send} />
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

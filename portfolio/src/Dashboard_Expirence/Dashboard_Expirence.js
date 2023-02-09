import React from "react";
import Expireience from "./Expiences";
import "../Dashboard_Expirence/Expirence.css";
import axios from "axios";
class DashboardExpirience extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {

    data: [],
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/dashboard/experience/`
      );
      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
import "../Dashboard_Expirence/Expirence.css"
import send from "../send.svg"
class DashboardExpirience extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { Experience : [ {
        _id: "63d28f75bf3f9bab4b38bb22",
        name: "first project",
        companyName: "Codi.Tech",
        startDate: "2006-05-13T00:00:00.000Z",
        description: "Create a portfolio",
        __v: 0
      },
      {
        _id: "63d2c0bb9492ae31d0d77ba8",
        name: "Third",
        companyName: "DD",
        startDate: "2000-05-13T00:00:00.000Z",
        endDate: "2005-05-13T00:00:00.000Z",
        description: "Create a portfolio",
        __v: 0
      },],
      name:"",
      companyName:"",
      description:"",
      startDate:"",
      endDate:"",
      isEditMode:false

      }
      toggleEdit=()=> {
        this.setState({ isEditMode: !this.state.isEditMode });
        if (!this.state.isEditMode) {
          this.setState({ name:"",
          companyName:"",
          description:"",
          startDate:"",
          endDate:""});
        }
      }
      handleInput = (event, key) => {
        this.setState({ [key]: event.target.value });
        console.log(this.state);
      };
    render() { 
        return ( <div className="dashboard-section">
        <h1>Experience</h1><hr />
      {!this.state.isEditMode&& <>  <main className="container-column">{this.state.Experience.map((objec)=>{
            return <Expireience Expir={objec} key={objec._id}/>
        })}
        </main> <button onClick={this.toggleEdit} className="dashboard-btns edit">+</button></>}
        {this.state.isEditMode && (
          <section>
            <form className="container-column" onSubmit={this.submitExperience}>
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
    </div> );
    }
  };

  render() {
    return (
      <div className="dashboard-section">
        <h1>Experience</h1>
        <hr />
        <main className="container-column">
          {this.state.data.map((objec) => {
            return <Expireience Expir={objec} key={objec._id} />;
          })}
        </main>
      </div>
    );
  }
}

export default DashboardExpirience;

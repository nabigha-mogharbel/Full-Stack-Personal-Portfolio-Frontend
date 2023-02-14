import React from "react";
import axios from "axios";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";
import Cookies from "universal-cookie"

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isvisible: true,
    id: this.props.skil._id,
    data: {
      name: this.props.skil.name,
      percentage: this.props.skil.percentage,
    },
  };
  toggelvisible = () => {
    this.setState({ isvisible: false });
    if (this.state.isvisible == false) {
      this.setState({ isvisible: true });
    }
  };
  handleChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    this.updateData(this.state.data, this.state.id);
  };

  deleteData = async (id) => {
    id = this.state.id;
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.delete(
        `${this.props.backendLink}/dashboard/skills/delete/${id}`, {headers:{"auth-token":bearer}}
      );
      console.log("Done");
      window.location.reload(false)

    } catch (error) {
      console.log("error deleting dashboard", error);
      console.error(error);
    }
  };
/**
 * 
 * @param {Object} data 
 * @param {Object_id} id 
 */
  updateData = async (data, id) => {
    id = this.state.id;
    const skillsData = {
      name: this.state.data.name,
      percentage: this.state.data.percentage,
    };
    console.log(skillsData + "\n" + id);
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.put(
        `${this.props.backendLink}/dashboard/skills/update/${id}`,
        skillsData, {headers:{"auth-token":bearer}}
      );
      console.log(response.data.response);
      window.location.reload(false)

    } catch (error) {
      console.error(error);
    }
  };

    render() { 
        return ( 
            <div className="dashboard-card">
            <div className="container-row">
                <div className="container-column">
            <h3 className="dashboard-title">{this.props.skil.name}</h3>
            <p className="dashboard-data">
              {this.props.skil.percentage}
            </p>
          </div>
         {!this.state.isEditMode && <div className="container-column">
            <button onClick={this.toggelvisible} className="dashboard-btns edit">
              <img src={edit} />
            </button>
            <button
              onClick={this.deleteData}
              className="dashboard-btns cancel"
            >
              <img src={trash} />
            </button>
          </div>}
       
        </div>
        {!this.state.isvisible && (
          <div className="editinformation">
            <form onSubmit={this.handleSubmit} >
              <div className="allinfo">
                <label htmlFor="major">Name: </label>
                <input
                  type="text"
                  name="name"
                  value={this.state.data.name}
                  onChange={this.handleChange}
                />
                <label htmlFor="degre">Percentage</label>
                <input
                  type="text"
                  name="percentage"
                  value={this.state.data.percentage}
                  onChange={this.handleChange}
                />
              </div>
              <div className="dashboard-btns edit">
                <button>
                  <img src={send} alt="" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Skills;

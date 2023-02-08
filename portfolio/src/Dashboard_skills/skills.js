import React from "react";
import axios from "axios";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";

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
    event.preventDefault();
    this.updateData(this.state.data, this.state.id);
  };

  deleteData = async (id) => {
    id = this.state.id;
    try {
      const response = await axios.delete(
        `http://localhost:5001/dashboard/skills/delete/${id}`
      );
      console.log(response.data.response);
    } catch (error) {
      console.log("error deleting dashboard", error);
      console.error(error);
    }
  };

  updateData = async (data, id) => {
    id = this.state.id;
    const skillsData = {
      name: this.state.data.name,
      percentage: this.state.data.percentage,
    };
    console.log(skillsData + "\n" + id);
    try {
      const response = await axios.put(
        `http://localhost:5001/dashboard/skills/update/${id}`,
        skillsData
      );

      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="educationcard">
        <div className="information">
          <div className="info">
            <h3>
              {this.props.skil.name} <br></br>
              <br></br>
              {this.props.skil.percentage}
            </h3>
          </div>
          <div className="editanddelet">
            <button onClick={this.toggelvisible}>
              <img src={edit} alt=""></img>
            </button>
            <button>
              <img src={trash} alt="" onClick={this.deleteData}></img>
            </button>
          </div>
        </div>
        {!this.state.isvisible && (
          <div className="editinformation">
            <form onSubmit={this.handleSubmit}>
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
              <div className="submit">
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

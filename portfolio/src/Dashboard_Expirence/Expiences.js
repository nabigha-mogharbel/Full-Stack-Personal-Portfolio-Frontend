import React from "react";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";

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

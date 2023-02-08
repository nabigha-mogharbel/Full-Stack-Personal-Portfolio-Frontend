import React from "react"
import edit from "../edit.svg"
import trash from "../trash.svg"
import send from "../send.svg"

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  
        isvisible:true
    }
    toggelvisible = () => {
        this.setState({ isvisible: !this.state.isvisible })
    }
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
              onClick={this.deleteProject}
              className="dashboard-btns cancel"
            >
              <img src={trash} />
            </button>
          </div>}
            </div>
            {!this.state.isvisible && 
            <form className="container-column">
                <div className="container-row-to-colfo">
                    <label htmlFor="major">Name</label>
                    <input type="text" />
                </div>
                <div className="container-row-to-colfo">
                    <label htmlFor="degre">Percentage</label>
                    <input type="text" />
                </div>
                <div className="container-row">
              <button type="submit" className="dashboard-btns edit"><img src={send}/></button>
              <button
                onClick={this.toggelvisible}
                className="dashboard-btns cancel"
              >
                X
              </button>
            </div>
            </form>}
        </div>
         );
    }
}
 
export default Skills;
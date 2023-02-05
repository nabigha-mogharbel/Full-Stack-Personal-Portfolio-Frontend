import React from "react";
import edit from "../edit.svg"
import trash from "../trash.svg"
import send from "../send.svg"


class Education extends React.Component {
    constructor(props) {
        super(props);
    
    this.state = {
        isvisible: true
    };
}
    toggelvisible = () => {
        this.setState({ isvisible: false })
        if (this.state.isvisible == false) {
            this.setState({ isvisible: true })
        }
    }

    render() {
        return (
        <div className="educationcard">
            <div className="information">
                <div className="info">
                <h3>{this.props.edu.major}<br></br>{this.props.edu.degre}<br></br>{this.props.edu.institute}<br></br>{this.props.edu.startdate}<br></br>{this.props.edu.enddate}</h3>
                </div>
                <div className="editanddelet">
                    <button onClick={this.toggelvisible}>
                        <img src={edit} alt="" ></img>
                    </button>
                    <button>
                        <img src={trash} alt=""></img>
                    </button>
                </div>
            </div>
            {!this.state.isvisible && 
            <div className="editinformation">
                <div className="allinfo">
                    <label htmlFor="major">Major</label>
                    <input type="text" />
                    <label htmlFor="degre">Degre</label>
                    <input type="text" />
                    <label htmlFor="institute">institute</label>
                    <input type="text" />
                    <label htmlFor="StartDate">StartDate</label>
                    <input type="Date" name="" id="" />
                    <label htmlFor="EndDate">EndDate</label>
                    <input type="Date" />
                </div>
            
                <div className="submit">
                    <button>
                        <img src={send} alt="" />
                    </button>
                </div>
            </div>}
        </div>
        );
    }
}
export default Education;



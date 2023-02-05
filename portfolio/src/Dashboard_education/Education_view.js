import React from "react";
import edit from "../edit.svg"
import trash from "../trash.svg"
import send from "../send.svg"


class Education extends React.Component {
    constructor(props) {
        super(props);
    
    this.state = {
        major:"",
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
                {this.props.education.map((ele) => {
                return <h3>{ele.major}<br></br>{ele.degre}<br></br>{ele.institute}<br></br>{ele.startdate}<br></br>{ele.enddate}</h3>;
                
              })}
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




import React from "react";

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
                 {this.props.skills.map((ele)=>{
                    return<h3>{ele.name}<br></br>{ele.percentage}</h3>
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
                    <label htmlFor="major">Name</label>
                    <input type="text" />
                    <label htmlFor="degre">Percentage</label>
                    <input type="text" />
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
 
export default Skills;
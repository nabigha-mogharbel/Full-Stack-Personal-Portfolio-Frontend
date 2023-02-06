import React from "react";


import edit from "../edit.svg"
import trash from "../trash.svg"
import send from "../send.svg"

class Expirence extends React.Component {
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
                    <h3>
                        {this.props.Expir.name}<br></br>
                        {this.props.Expir.companyName}<br></br>
                        {this.props.Expir.startDate}<br></br>
                        {this.props.Expir.endDate}<br></br>
                    </h3>
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
                    <label htmlFor="degre">companyName</label>
                    <input type="text" />
                    <label htmlFor="degre">startDate</label>
                    <input type="text" />
                    <label htmlFor="degre">endDate</label>
                    <input type="text" />
                    <label htmlFor="degre">description</label>
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
 
export default Expirence;
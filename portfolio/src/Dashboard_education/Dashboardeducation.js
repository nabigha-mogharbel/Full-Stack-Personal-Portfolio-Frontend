import React from "react";
import "../Dashboard_education/Dashboardeducation.css"


class Education extends React.Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        education :{
            _id: "63cfe11a916be585e47fc9ae",
            magor: "pv",
            institute: "bro",
            degre: "ts2",
            __v: 0,
            degree: "heysss",
            major: "hello"
          }, 

        isvisible:true
    }
    togglevisible=()=>{
    this.setState({isvisible:false})
    }
     
    onClicksubmit=()=>{
        this.setState({education:{
            major:document.getElementById("major").value
        }})
    }
    render() { 
        
        return ( <div className="education">
                          <div className="container">
                              <h1>Education</h1><hr/>
                                { this.state.isvisible &&<div className="info">
                                    <h2>Major</h2>
                                    <p>{this.state.education.major}</p>
                                    <h2>Institute</h2>
                                    <p>{this.state.education.institute}</p>
                                    <h2>Degree</h2>
                                    <p>{this.state.education.degre}</p>
                                    <h2>StartDate</h2>
                                    <p>{null}</p>
                                    <h2>endDate</h2>
                                    <p>{null}</p>
                                    <div className="editeducation"onClick={this.togglevisible}>
                                        <p>edit</p>
                                    </div>
                                </div>}
                                { !this.state.isvisible&&<div className="editinfo" >
                                    <div className="information">
                                    <label htmlFor="major">Major</label>
                                    <input type="text" id="major"/>
                                    <label htmlFor="Institute">Institute</label>
                                    <input type="text" />
                                    <label htmlFor="Degree">Degree</label>
                                    <input type="text" />
                                    <label htmlFor="StartDate">StartDate</label>
                                    <input type="date" />
                                    <label htmlFor="endDate">endDate</label>
                                    <input type="date" />
                                    </div>
                                    <div className="controle">
                                    <div className="canceledit" onClick={()=>{
                                        this.setState({isvisible:true})
                                    }}><span>Cancel</span></div>
                                    <div className="submitedit" onClick={this.onClicksubmit}> <span>submit</span></div>
                                    </div>
                                </div>}
                            </div>
                    </div> );
    }
}
export default Education;
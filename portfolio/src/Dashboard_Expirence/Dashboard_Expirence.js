import React from "react"
import Expireience from "./Expiences";
import "../Dashboard_Expirence/Expirence.css"

class DashboardExpirience extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { Experience : [ {
        _id: "63d28f75bf3f9bab4b38bb22",
        name: "first project",
        companyName: "Codi.Tech",
        startDate: "2000-05-13T00:00:00.000Z",
        description: "Create a portfolio",
        __v: 0
      },
      {
        _id: "63d2c0bb9492ae31d0d77ba8",
        name: "Third",
        companyName: "DD",
        startDate: "2000-05-13T00:00:00.000Z",
        endDate: "2000-05-13T00:00:00.000Z",
        __v: 0
      },]

      }
    render() { 
        return ( <div className="education">
        <h1>Experience</h1><hr />
        <div className="container">{this.state.Experience.map((objec)=>{
            return <Expireience Expir = {objec} key={objec._id}/>
        })}
        </div>
    </div> );
    }
}
 
export default DashboardExpirience;
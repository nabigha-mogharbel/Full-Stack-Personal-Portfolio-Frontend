import React from "react";
import "../Dashboard_education/Dashboardeducation.css"
import Education from "./Education_view";

class DashboardEducation extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        education: [{
            _id: "63cfe11a916be585e47fc9ae",
            major: "hello",
            institute: "bro",
            degre: "ts2",
            __v: 0,
            startdate:3+"/"+5+"/"+2019,
            enddate:8+"/"+3+"/"+2022
        },
        {
            _id: "63cfe11a916be585e47fc9a1",
            major: "hii",
            institute: "bro",
            degre: "ts2",
            __v: 0,
            startdate:1+"/"+3+"/"+2020,
            enddate:2+"/"+22+"/"+ 2020
        },]
    }

    render() {

        return (<div className="dashboard-section">
            <h1>Education</h1><hr />
            <div className="container-education">
                {this.state.education.map((ele) => {
                    return <Education edu={ele}  key={ele._id}/>;
                })}
            </div>
        </div>);
    }
}

export default DashboardEducation;
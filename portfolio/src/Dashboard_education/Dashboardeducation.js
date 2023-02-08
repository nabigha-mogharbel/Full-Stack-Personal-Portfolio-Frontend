import React from "react";
import "../Dashboard_education/Dashboardeducation.css"
import Education from "./Education_view";
import axios from "axios";
class DashboardEducation extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        data:[]
    }
    componentDidMount() {
        this.getData();
      }
      getData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5001/dashboard/education/`
          );
          this.setState({ data: response.data.response });
          console.log(response.data.response);
        } catch (error) {
          console.error(error);
        }
      };
    render() {

        return (<div className="dashboard-section">
            <h1>Education</h1><hr />
            <div className="container">
                {this.state.data.map((ele) => {
                    return <Education edu={ele}  key={ele._id}/>;
                })}
            </div>
        </div>);
    }
}

export default DashboardEducation;
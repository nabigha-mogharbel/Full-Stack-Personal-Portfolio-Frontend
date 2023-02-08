import React from "react";
import Expireience from "./Expiences";
import "../Dashboard_Expirence/Expirence.css";
import axios from "axios";
class DashboardExpirience extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    _id: "63d28f75bf3f9bab4b38bb22",
    name: "first project",
    companyName: "Codi.Tech",
    startDate: "2006-05-13T00:00:00.000Z",
    description: "Create a portfolio",
    data: [],
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5008/dashboard/experience/`
      );
      this.setState({ data: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="dashboard-section">
        <h1>Experience</h1>
        <hr />
        <main className="container-column">
          {this.state.data.map((objec) => {
            return <Expireience Expir={objec} key={objec._id} />;
          })}
        </main>
      </div>
    );
  }
}

export default DashboardExpirience;

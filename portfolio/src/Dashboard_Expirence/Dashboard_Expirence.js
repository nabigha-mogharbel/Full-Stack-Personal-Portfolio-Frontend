import React from "react";
import Expireience from "./Expiences";
import "../Dashboard_Expirence/Expirence.css";
import axios from "axios";
class DashboardExpirience extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {

    data: [],
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/dashboard/experience/`
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

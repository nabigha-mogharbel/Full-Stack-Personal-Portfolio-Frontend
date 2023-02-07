import React, { Component } from "react";
import axios from "axios";

class About extends Component {
  state = {
    about: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5010/dashboard/about/")
      .then(res =>{ this.setState({ about: res.data })
      console.log(res.data)}
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.about.map(about => (
          <div key={about._id}>
            <p>{about.bio}</p>
            <p>{about.expertise}</p>
            {console.log(about.personal_pic)}
            
            <img src={`http://localhost:5010/${about.personal_pic}`} alt="Profile" />
          </div>
        ))}
      </div>
    );
  }
}

export default About;

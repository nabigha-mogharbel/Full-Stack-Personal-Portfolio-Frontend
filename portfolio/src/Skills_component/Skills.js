import axios from "axios";
import React from "react";
import "../Skills_component/Skills.css";
class Skill extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.getData();
    this.circle();
  }
  circle = () => {
    const circles = document.querySelectorAll(".progress");

    for (var i = 0; i < circles.length; i++) {
      const totalProgress = circles[i]
        .querySelector("circle")
        .getAttribute("stroke-dasharray");
      const progress = circles[i].parentElement.getAttribute("data-percent");

      circles[i].querySelector(".bar").style["stroke-dashoffset"] =
        (totalProgress * progress) / 100;
    }
  };
  getData = () => {
    axios
      .get("http://localhost:5000/dashboard/skills/")
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data.response });
      })
      .catch((error) => {
        this.setState({ error: error });
        console.error(error);
      });
  };
  updateData = (id, updatedData) => {
    console.log(id, updatedData);
    console.log(typeof id);
    axios
      .put(`http://localhost:5010/dashboard/skills/update/${id}`, updatedData, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("hello ");
        this.getData();
      })
      .catch((error) => {
        console.log("hello error ");

        console.error(error);
      });
  };

  deleteData = (id) => {
    axios
      .delete(`http://localhost:5010/dashboard/skills/delete/${id}`)
      .then((res) => {
        this.getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="container">
        Helllpooooo
        <div >
          {this.state.data.map((item) => (
            <div key={item._id}>
              <div >
              <h2>{item.name}</h2>
                <div class="progressdiv" data-percent={item.percentage}>
                  <svg class="progress" width="120" height="120">
                    <circle
                      r="52"
                      cx="60"
                      cy="60"
                      fill="transparent"
                      stroke-dasharray="326"
                      stroke-dashoffset="0"
                    ></circle>
                    <circle
                      class="bar"
                      r="52"
                      cx="60"
                      cy="60"
                      fill="transparent"
                      stroke-dasharray="326"
                      stroke-dashoffset="0"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="container">
    
        <div class="progressdiv"  data-percent="36">
  <svg class="progress" width="120" height="120">
  <circle r="52" cx="60" cy="60" fill="transparent" stroke-dasharray="326" stroke-dashoffset="0" ></circle>
  <circle class="bar" r="52" cx="60" cy="60" fill="transparent" stroke-dasharray="326" stroke-dashoffset="0"></circle>
</svg></div>
      </div> */}
        </div>
      </div>
    );
  }
}

export default Skill;

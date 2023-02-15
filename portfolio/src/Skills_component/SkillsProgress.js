import React from "react";
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



class SkillsProgress extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
       value:0
    }
    count  =  setInterval(() => {
            
                this.setState({value:this.state.value +1})
                if (this.state.value === this.props.skil.percentage) {
                  this.setState({ value: this.props.skil.percentage });
                }
          
        }, 40);
        
    render() {

        
        return (
          <div className="circle">
            <div className="Skills_Name">
              <h4> {this.props.skil.name}</h4>
            </div>
            <div className="skills_Percentage">
              <CircularProgressbar
                value={this.state.value}
                text={`${this.state.value}%`}
                className="CircularProgressbar"
                styles={buildStyles({
                  rotation: 0,
                  strokeLinecap: "",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `#858792`,
                  textColor: "#FFF",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
        );
    }
}

export default SkillsProgress;

//{this.props.skil.percentage}
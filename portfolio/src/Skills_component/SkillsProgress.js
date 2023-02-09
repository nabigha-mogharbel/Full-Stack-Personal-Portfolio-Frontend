import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



class SkillsProgress extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
       
    }
    render() {
        return (
        
            <div className="circle">
                <div className="Skills_Name">
                    <h4> {this.props.skil.name}</h4>
                </div>
                <div className="skills_Percentage">
                    <CircularProgressbar value={this.props.skil.percentage} text={`${this.props.skil.percentage}%`} className="CircularProgressbar" />
                </div>
            </div>

        );
    }
}

export default SkillsProgress;
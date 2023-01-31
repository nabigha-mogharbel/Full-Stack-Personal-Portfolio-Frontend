import React from "react";
import"./styles/Projects.css";
import Bars from "../icon/Bars.svg"

class sidebar extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="side_bar">
                <div className="menu">
               
                </div>

            <nav>
                <a href="#">About</a> <hr />
                <a href="#">My skills</a> <hr />
                <a href="#">Work</a> <hr />
                <a href="#">Contact</a> <hr />
                <a href="#">Resume</a>
            </nav>
        </div>
        );
    }
}
 
export default sidebar;
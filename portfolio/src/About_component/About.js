import React from "react";
import "../About_component/About.css";
import insta from "../icons/instagram.svg";
import facebook from "../icons/facebook.svg";
import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";
import { CSSTransition } from "react-transition-group";
import portfolioImg from '../icons/ahmadBadawi.png'
import axios from "axios";

class About extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        isVisible: true,
        data:this.props.aboData
    };
    toggleVisibility = () => {
        this.setState((state) => ({
            isVisible: !state.isVisible,
        }));
    };
    componentDidMount(){
        console.log(this.state.data)
    }
    render() {
        const { isVisible } = this.state;
        return (
            <div className="about">
                <div className="content_info">
                    <div className="information-about">
                        <h1>Ahmad Badawi</h1>
                        <p>{this.props.aboData.expertise}</p>
                        <p>{this.props.aboData.bio}</p>
                    </div>
                    <div className="imageone">
                        <img
                            src={portfolioImg}
                            alt=""
                        ></img>

                        <div className="findme" onClick={this.toggleVisibility}>
                            <button>Find Me</button> 
                        </div>
                        <CSSTransition
                            in={!isVisible}
                            timeout={300}
                            classNames="linkss"
                            unmountOnExit
                        >
                            <div className="links">
                                <div className="facebook">
                                    <img src={facebook} alt="" />
                                </div>
                                <div className="github">
                                    <img src={github} alt="" />
                                </div>
                                <div className="insta">
                                    <img src={insta} alt="" />
                                </div>
                                <div className="linkedin">
                                    <img src={linkedin} alt="" />
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        );
    }
}
// import React, { Component } from "react";
// import axios from "axios";

// class About extends Component {
//   state = {
//     about: []
//   };

//   componentDidMount() {
//     axios
//       .get("http://localhost:5010/dashboard/about/")
//       .then(res =>{ this.setState({ about: res.data })
//       console.log(res.data)}
//       )
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <div>
//         {this.state.about.map(about => (
//           <div key={about._id}>
//             <p>{about.bio}</p>
//             <p>{about.expertise}</p>
//             {console.log(about.personal_pic)}
            
//             <img src={`http://localhost:5010/${about.personal_pic}`} alt="Profile" />
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

export default About;

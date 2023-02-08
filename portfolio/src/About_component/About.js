import React from "react";
import "../About_component/About.css";
import insta from "../icons/instagram.svg";
import facebook from "../icons/facebook.svg";
import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";
import { CSSTransition } from "react-transition-group";
import portfolioImg from '../icons/ahmadBadawi.png'

class About extends React.Component {
    state = {
        isVisible: true,
    };
    toggleVisibility = () => {
        this.setState((state) => ({
            isVisible: !state.isVisible,
        }));
    };
    render() {
        const { isVisible } = this.state;
        return (
            <div className="about">
                <div className="content_info">
                    <div className="information">
                        <h1>Ahmad Badawi</h1>
                    </div>
                    <div className="imageone">
                        <img
                            src={portfolioImg}
                            alt=""
                        ></img>

                        <div className="findme" onClick={this.toggleVisibility}>
                            <span> Find Me</span>
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

export default About;

import React from "react";
import "../Sidebar_component/SideBar.css";
import bars from '../icons/bars-solid.svg'
import { CSSTransition } from 'react-transition-group';
// const menu = document.querySelector('.menu')
// const nav = document.querySelector('.nav')

class sidebar extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        isVisible: true,
    }
    // handleClick = event => event.target.classList.add('side');
    toggleVisibility = () => {
        this.setState(state => ({
            isVisible: !state.isVisible,
        }));
    };
    render() {
        const { isVisible } = this.state;
        return (
            <div className="side_bar">
                <div className="menu" onClick={this.toggleVisibility} >
                    <img className="bars" src={bars} />
                </div>
                <CSSTransition
                    in={!isVisible}
                    timeout={300}
                    classNames="sidebar"
                    unmountOnExit>

                    <div className="nav">
                        <a href="#" onClick={e => this.props.click(0)}>About</a> <hr />
                        <a href="#" onClick={e => this.props.click(1)}>Work</a> <hr />
                        <a href="#"onClick={e => this.props.click(2)}>Skills</a> <hr />
                        <a href="#"onClick={e => this.props.click(3)}>Resume</a> <hr />
                        <a href="#"onClick={e => this.props.click(4)}>Contact</a>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}

export default sidebar;
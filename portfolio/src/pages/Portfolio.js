import React from "react"
import About from "../About_component/About"
import Projects from "../Project_Component/Projects"
import Resume from "../Resume_component/Resume"
import Contact from "../Contact_component/Contact"
import Sidebar from "../Sidebar_component/Sidebar"
export default class Portfolio extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>
            <About />
            <Sidebar/>
            <Projects />
            <Resume />
            <Contact/>
            </>
        )
    }
}
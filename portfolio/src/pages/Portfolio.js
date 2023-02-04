import React from "react"
import About from "../About_component/About"
import Projects from "../Project_Component/Projects"
import Resume from "../Resume_component/Resume"
import Contact from "../Contact_component/Contact"

export default class Portfolio extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>
            <About />
            <Projects />
            <Resume />
            <Contact/>
            </>
        )
    }
}
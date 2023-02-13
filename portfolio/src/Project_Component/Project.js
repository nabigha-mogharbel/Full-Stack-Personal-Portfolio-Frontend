import React, { createFactory } from "react";
import "../Project_Component/Projects.css";
import backward from "../icons/backward-solid.svg";
import forward from "../icons/forward-solid.svg";
import Projects from "./Projects";
import { CSSTransition } from 'react-transition-group';

class Project extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        imageA : 0,
        imageB : 1,
        imageanddes:[{src:"https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg",
                        description:"lololololololo"},
                        {src:'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg',
                        description:"lalala" },
                        {src:"https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg",
                        description:"lililili"},
                        {src:"https://i.pinimg.com/564x/52/d4/07/52d4073a9296c79ae2da6a5c45f43f01.jpg",
                        description:"kjbnkjkljkbjhkjnbh"}],
         data:this.props.proData
    };}

     handleImageincrement = () => {
        if(this.state.imageB === this.state.data.length-1){
            this.setState({imageA: this.state.imageB ,imageB : 0 })
        
        }
        else{this.setState({imageA :this.state.imageB, imageB: this.state.imageB+1})}
        
    }
        handleImagedeincrement = () => {
            if(this.state.imageA === 0){
                this.setState({imageB: 0 ,imageA : this.state.data.length-1  })
            
            }
            else{this.setState({imageB:this.state.imageA, imageA: this.state.imageA-1})}
            
        }
    


    render() {
            
        //let  {imageA, imageB} = this.state
        
        return (
            <div className="slider">
                <div className="projects_Name">
                        <h2>projects</h2>
                </div>
                <div className="image-anddescription" >
                  
                    <button onClick={this.handleImagedeincrement} >
                        <img src={backward} alt=""  />
                    </button >
                        <Projects description={this.props.proData[this.state.imageA].name} img={this.props.proData[this.state.imageA].img}/>
                        <Projects description={this.props.proData[this.state.imageB].name} img= {this.props.proData[this.state.imageB].img}/>
                    <button onClick={this.handleImageincrement}>
                        <img src={forward} alt="" />
                    </button>
                </div>
            </div>
        );
    }
    
}
export default Project;

// 'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg'
// "https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg"

/*["https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg"
        ,'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg',
        "https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg"] */


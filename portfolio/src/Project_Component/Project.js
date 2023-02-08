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
                        description:"kjbnkjkljkbjhkjnbh"}]
    };}

     handleImageincrement = () => {
        if(this.state.imageB === this.state.imageanddes.length-1){
            this.setState({imageA: this.state.imageB ,imageB : 0 })
        
        }
        else{this.setState({imageA :this.state.imageB, imageB: this.state.imageB+1})}
        
    }
        //this.setState({ imageA : imageA ,imageB: imageB})
       // console.log(imageA , imageB)
        //console.log(this.state.imageanddes.length - 1 )
        
        handleImagedeincrement = () => {
            if(this.state.imageA === 0){
                this.setState({imageB: 0 ,imageA : this.state.imageanddes.length-1  })
            
            }
            else{this.setState({imageB:this.state.imageA, imageA: this.state.imageA-1})}
            
        }
    
    /* handleImagedeincrement = ()=>{
        this.setState({imageA : imageA -- , imageB : imageB --})
        
            if(imageA === 0){
                this.setState({imageA:this.state.imageanddes.length-2 , imageB:this.state.imageanddes.length-1})
            }
        this.setState({imageA: imageA , imageB: imageB})
    }*/

    // images  = [{src:"https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg",
    //             description:"lololololololo"},
    //             {src:'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg',
    //             description:"lalala"},
    //             {src:"https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg",
    //             description:"lililili"}]
    

    render() {
            
        //let  {imageA, imageB} = this.state
        
        return (
            <div className="slider">
                <div className="image-anddescription" >
                    <button onClick={this.handleImagedeincrement} >
                        <img src={backward} alt=""  />
                    </button >
                        <Projects description={this.state.imageanddes[this.state.imageA].description} img={this.state.imageanddes[this.state.imageA].src}/>
                        <Projects description={this.state.imageanddes[this.state.imageB].description} img= {this.state.imageanddes[this.state.imageB].src}/>
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

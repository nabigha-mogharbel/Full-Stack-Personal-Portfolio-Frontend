import React from "react";
import "../Project_Component/Projects.css";
import backward from "../icons/backward-solid.svg";
import forward from "../icons/forward-solid.svg";
import Projects from "./Projects";

class Project extends React.Component {

    state = {
        index: 0,
        imageanddes:[{src:"https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg",
                        description:"lololololololo"},
                        {src:'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg',
                        description:"lalala" },
                        {src:"https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg",
                        description:"lililili"}]
    };

    // images  = [{src:"https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg",
    //             description:"lololololololo"},
    //             {src:'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg',
    //             description:"lalala"},
    //             {src:"https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg",
    //             description:"lililili"}]
        handleImageincrement = () => {
        let i = this.state.index
        i++
        if(i === this.state.imageanddes.length){
            i = 0
        }
            this.setState({src :this.state.imageanddes[i].src})
            this.setState({description : this.state.imageanddes[i].description , index:i})
        }

    render() {
             
    
        //     const handleImagedeincrement = () => {
        //     var currentIndex = this.state.index
        //     currentIndex--
        //     if(currentIndex === -1){
        //         currentIndex = this.images.length -1
        //     }
            
        //     this.setState({src:this.images[currentIndex].src ,description:this.images[currentIndex].description , index :currentIndex})
        
        
        return (
            <div className="slider">
                <div className="image-anddescription" >
                    <button >
                        <img src={backward} alt=""  />
                    </button>

                        <Projects description={this.state.imageanddes[this.state.index].description} img={this.state.imageanddes[this.state.index].src}/>
                        <Projects description={this.state.imageanddes[this.state.index+1].description} img= {this.state.imageanddes[this.state.index+1].src}/>
                    
                    <button>
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


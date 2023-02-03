import React from "react";
import "../Project_Component/Projects.css";
import backward from "../icons/backward-solid.svg"
import forward from "../icons/forward-solid.svg"

class Project extends React.Component {
    constructor(props) {
        super(props);
    }
        state = {
        src : "https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg" ,
        description:"lololololololo" , index:0
    };

    images  = [{src:"https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg",
                description:"lololololololo"},
                {src:'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg',
                description:"lalala"},
                {src:"https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg",
                description:"lililili"}]

    render() {
        
            const handleImageincrement = () => {
            let i = this.state.index
            i++
            if(i == this.images.length){
                i = 0
            }
                this.setState({src :this.images[i].src})
                this.setState({description : this.images[i].description , index:i})
             console.log(i)
             }
        const handleImagedeincrement = () => {
            var currentIndex = this.state.index            
            currentIndex--
            if(currentIndex == -1){
                currentIndex = this.images.length -1
            }
            console.log(currentIndex)
            this.setState({src:this.images[currentIndex].src ,description:this.images[currentIndex].description , index :currentIndex})
        }
        return (
            <div className="slider">
                <div className="image_and_sub">
                    <div className="image">
                        < div className="img">
                            <img
                                src= {this.state.src}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="sub">
                        <p>
                            {this.state.description}
                        </p>
                    </div>
                </div>
                <div className="click">
                    <div className="befor" >
                        <img src={forward} alt="" onClick={handleImageincrement}/>
                    </div>
                    <div className="after"><img src={backward} alt="" onClick={handleImagedeincrement} /></div>
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
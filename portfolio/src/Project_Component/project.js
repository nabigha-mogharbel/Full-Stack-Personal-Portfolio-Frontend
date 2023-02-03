import React from "react";
import "../Project_Component/Projects.css";




class Project extends React.Component {
    state = {
        src : "https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg" ,
        description:"lololololololo"
    };

    images  = [{src:"https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg",
                description:"lololololololo"},
                {src:'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg',
                description:"lalala"},
                {src:"https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg",
                description:"lililili"}]

    render() {
        
            const handleImageincrement = () => {
            let i = 0
                i++
                this.setState({src :this.images[i].src})
                this.setState({description : this.images[i].description})
            
            console.log(i)
            // var currentIndex = this.images.indexOf(this.state.src)
            // currentIndex++
            // console.log(this.images.src)
            // if(currentIndex == this.images.length){
            //     currentIndex = 0
            // }
            // console.log(currentIndex)
            // this.setState({src : this.images[currentIndex].src})
            
        }
        
        const handleImagedeincrement = () => {
            var currentIndex = this.images.indexOf(this.state.src)
            currentIndex--

            if(currentIndex == -1){
                currentIndex = this.images.length -1
            }
            console.log(currentIndex)
            this.setState({src:this.images[currentIndex]})
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
                        <p onClick={handleImageincrement}>hgjdskhgf</p>
                    </div>
                    <div className="after"><p onClick={handleImagedeincrement}>fchghuojighjvf</p></div>
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
        "https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg"]
    */
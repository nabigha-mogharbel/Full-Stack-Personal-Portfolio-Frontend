import React from "react";
import "./styles/Projects.css"


class Project extends React.Component {
    state = {};
    handleClick = event => event.target.classList.add('active');
    render() {
        return (
                    <div className="box" onClick={this.handleClick}>
                        <img
                            src= {this.props.src}
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                            inventore!
                        </p>
                    
                    </div>
            
        );
    }
}

export default Project;

// 'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg'
// "https://i.pinimg.com/564x/d9/88/01/d98801a6219bb43c5d7001309671f78c.jpg"
// "https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg"
import React from 'react'

import '../Project_Component/Projects.css'

class Projects extends React.Component {
    state = { onhover:false } 
    render(
    ) { 
        return (
            <div className="all" >
                    <div className="imganddes">
                    <img onMouseEnter={()=>{
                        this.setState({onhover:true})
                    }} onMouseLeave={()=>{
                        this.setState({onhover:false})
                    }}
                        src={`https://ahmadbadawiportfolio.onrender.com/${this.props.img}`}
                        alt=""
                        className='projectimage'
                    />
                    {this.state.onhover &&<p id="image-des" onMouseEnter={()=>{
                        this.setState({onhover:true})
                    }} onMouseLeave={()=>{
                        this.setState({onhover:false})
                    }}>
                        {this.props.description} 
                    </p>}
                    </div>
            </div>
        );
    }
}

export default Projects ;






                // https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg'
                // "https://i.pinimg.com/564x/d9/88/01/d98801a6219bb43c5d7001309671f78c.jpg"
                //  "https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg"
                // "https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg"
                // 'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg'
                
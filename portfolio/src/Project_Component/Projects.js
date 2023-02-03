import React from 'react'
import Project from './project';
import '../Project_Component/Projects.css'

class projects extends React.Component {
    state = {  } 
    render(
    ) { 
        return (
            <div className="all">
                {/* <div className="des">
                    <h2>projects</h2>
                </div>
                <div className="box_content ">
                <Project src='https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg'/>
                <Project src="https://i.pinimg.com/564x/d9/88/01/d98801a6219bb43c5d7001309671f78c.jpg"/>
                <Project src= "https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg"/>
                <Project src="https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg"/>
                <Project src='https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg'/>
                <Project src="https://i.pinimg.com/564x/d9/88/01/d98801a6219bb43c5d7001309671f78c.jpg"/>
                </div>
                 */}
                 <Project/>
            </div>
        );
    }
}

export default projects ;






                // https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg'
                // "https://i.pinimg.com/564x/d9/88/01/d98801a6219bb43c5d7001309671f78c.jpg"
                //  "https://i.pinimg.com/564x/43/a9/c3/43a9c358ae61987d07e13847fe5e45d5.jpg"
                // "https://i.pinimg.com/564x/5f/7c/08/5f7c08b0ac597d7c114c4f35fafc6d99.jpg"
                // 'https://i.pinimg.com/564x/05/83/fd/0583fd2df28236b5baad40a5f7786108.jpg'
                // "https://i.pinimg.com/564x/d9/88/01/d98801a6219bb43c5d7001309671f78c.jpg"
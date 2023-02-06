import React from "react";
import "../Dashboard_Admin/Admin.css"


class Admin extends React.Component {

    state = {
        isvisible: true,
        password:"",
        username:""
    }

    toggelvisible = () => {
        this.setState({ isvisible: false })
        if (this.state.isvisible == false){
            this.setState({isvisible:true})
        }
        
    }
    submitit=()=>{
        this.setState({
            password:document.getElementById('password').value,
            username:document.getElementById('username').value
        })
    }

    render() {
        return (

            <div className="education">
                <h1>Admin</h1><hr />
                <div className="userpassedit">
                    {this.state.isvisible&&
                    <div className="userpass">
                        <div className="infopassuser">
                            <h3>Username</h3>
                            <p>{this.state.username}</p>
                            <h3>password</h3>
                            <p>{this.state.password}</p>
                        </div>

                        <button onClick={this.toggelvisible}>edit</button>
                        {console.log("*********************************")}
                         {console.log(this.state.isvisible)}
                    </div>}
                    {!this.state.isvisible&&
                    <div className="editpassuser">
                        <label htmlFor="Username">User name</label>
                        <input type="text" name="username" id="username" />
                        <label htmlFor="oldpassword">Old Password</label>
                        <input type="password" name="" id='' />
                        <label htmlFor="newpassword">New Password</label>
                        <input type="password" id="password" />
                        <div className="button">
                            <button onClick={this.toggelvisible}>cancel</button>
                            <button onClick={this.submitit}>send</button>
                        </div>
                    </div> } 
                </div>
            </div>);
    }
}

export default Admin;
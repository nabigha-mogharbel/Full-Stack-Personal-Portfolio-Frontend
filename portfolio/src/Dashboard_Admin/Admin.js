import React from "react";
import "../Dashboard_Admin/Admin.css"
import "../Dashboard_about/Dashboard.css"
import send from "../send.svg"


class Admin extends React.Component {

    state = {
        password:"",
        username:""
    }

    /*toggelvisible = () => {
        this.setState({ isvisible: false })
        if (this.state.isvisible == false){
            this.setState({isvisible:true})
        }
        
    }*/
    submitit=()=>{
        this.setState({
            password:document.getElementById('password').value,
            username:document.getElementById('username').value
        })
    }

    render() {
        return (
            <div className="dashboard-section">
                <main>
                <h1>My Account </h1>
                <hr />
                <section>
                    <form className="container-column">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                        <label htmlFor="newpassword1">New Password</label>
                        <input type="password" name="" id='newpassword1' />
                        <label htmlFor="newpassword2">New Password</label>
                        <input type="password" name="password" id="newpassword2"  />
                        <div className="container-row">
              <button type="submit" className="dashboard-btns edit"><img src={send}/></button>
              <button
                onClick={this.toggleEdit}
                className="dashboard-btns cancel"
              >
                X
              </button>
            </div>
                        <div className="container-row">
                            <button type="reset" onClick={this.clear}>cancel</button>
                            <button type="submit"onClick={this.submitit} className="dashboard-btns edits">send</button>
                        </div>
                    </form>
                </section>
                </main>
            </div>);
    }
}

export default Admin;

/*{this.state.isvisible&&
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
                    </div>}*/
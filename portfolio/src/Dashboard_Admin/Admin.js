import React from "react";
import "../Dashboard_Admin/Admin.css";
import "../Dashboard_about/Dashboard.css";
import send from "../send.svg";

class Admin extends React.Component {
  state = {
    password: "",
    cPassword:"",
    username: "",
  };

  /*toggelvisible = () => {
        this.setState({ isvisible: false })
        if (this.state.isvisible == false){
            this.setState({isvisible:true})
        }
        
    }*/
  submitAdmin = () => {

  };
  handleInput=(event, key) => {
    this.setState({[key]: event.target.value})
    console.log(this.state)
  }
  render() {
    return (
      <div className="dashboard-section">
        <main>
          <h1>My Account </h1>
          <hr />
          <section>
            <form className="container-column" onClick={this.submitAdmin}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" onChange={e => this.handleInput(e, "username")} value={this.state.username} />
              <label htmlFor="newpassword1">New Password</label>
              <input type="password" name=""onChange={e => this.handleInput(e, "password")} value={this.state.password} id="newpassword1" />
              <label htmlFor="newpassword2">Confirm Password</label>
              <input type="password" name="password" onChange={e => this.handleInput(e, "cPassword")} value={this.state.cPassword} id="newpassword2" />
              <div className="container-row">
                <button type="submit" className="dashboard-btns edit">
                  <img src={send} />
                </button>
                <button
                  onClick={this.toggleEdit}
                  className="dashboard-btns cancel"
                >
                  X
                </button>
              </div>
              <div className="container-row">
                <button type="reset" onClick={this.clear}>
                  cancel
                </button>
                <button
                  type="submit"
                  className="dashboard-btns edits"
                >
                  send
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    );
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

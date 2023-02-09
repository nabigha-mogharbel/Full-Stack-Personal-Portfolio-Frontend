import React from "react";
import axios from "axios";
import "../Dashboard_Admin/Admin.css";
import "../Dashboard_about/Dashboard.css";
import send from "../send.svg";

class Admin extends React.Component {
  state = {
    password: "",
    username: "",
    newpassword1:"",
    success:false
  };

  handleSubmit = async (event) => {
    // event.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5005/admin/update/${this.state.username}`, {
    
        password: this.state.password
      });
this.setState({success: true});
console.log("success");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
   /*toggelvisible = () => {
    cPassword:"",
    username: "",
  };

  /*toggelvisible = () => {
        this.setState({ isvisible: false })
        if (this.state.isvisible == false){
            this.setState({isvisible:true})
        }
        
    }*/
  confirmations = (e) => {
    const { password, newpassword1 } = this.state;
    if (password !== newpassword1) {
      e.target.style.border = "thick solid red";
      this.setState({
        password: "",
        newpassword1: ""
      });
      alert("Passwords do not match");
    }
  };
  render() {

    return (
    
      <div className="dashboard-section">
      { this.state.success && 
        <div className="alert alert-success" role="alert" style={{ width: '80%', margin: '20px auto', color: '#3c763d', backgroundColor: '#dff0d8' }}>
          <strong>Well done!</strong> Password has been updated successfully.
        </div>
      }
        <main>
          <h1>My Account : </h1>
          <hr />
          <section>
           
            <form className="container-column" onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <label htmlFor="newpassword1">New Password</label>
              <input
                type="password"
                name="password"
                id="newpassword1"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <label htmlFor="newpassword2">New Password</label>
              <input
                type="password"
                name="newpassword1"
                id="newpassword2"
                value={this.state.newpassword1}
                onChange={this.handleChange}
                onBlur={this.confirmations}
              />
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
                  onClick={this.handleSubmit}
                
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

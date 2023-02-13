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
    success:false,
    failes:false
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const url=process.env.REACT_APP_BASE_URL
    // url="https://ahmadbadawiportfolio.onrender.com"

    try {
      const response = await axios.put(`https://ahmadbadawiportfolio.onrender.com/admin/update/${this.state.username}`, {
    
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
    
      <div className="dashboard-section dashboard-section_about">
      { this.state.success && 
        <div className="alert alert-success" role="alert" style={{ width: '80%', margin: '20px auto', color: '#3c763d', backgroundColor: '#dff0d8' }}>
          <strong>Well done!</strong> Password has been updated successfully.
        </div>
      }
        <main>
          <h1>My Account : </h1>
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



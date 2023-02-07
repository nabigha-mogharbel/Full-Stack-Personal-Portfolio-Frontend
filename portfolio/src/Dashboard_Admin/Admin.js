import React from "react";
import axios from "axios";
import send from "../send.svg";

class Admin extends React.Component {
  state = {
    password: "",
    username: "",
    newpassword1:""
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/admin/create", {
        username: this.state.username,
        password: this.state.password,
      });

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
      //   <form onSubmit={this.handleSubmit}>
      //     <label htmlFor="username">Username:</label>
      //     <input
      //       type="text"
      //       id="username"
      //       name="username"
      //   value={this.state.username}
      //   onChange={this.handleChange}
      //     />
      //     <br />
      //     <label htmlFor="password">Password:</label>
      //     <input
      //       type="password"
      //       id="password"
      //       name="password"
      //   value={this.state.password}
      //   onChange={this.handleChange}
      //     />
      //     <br />
      //     <button type="submit">Create</button>
      //   </form>
      <div className="dashboard-section">
        <main>
          <h1>My Account : </h1>
          <hr />
          <section>
            <form className="container-column">
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
                  onClick={this.submitit}
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

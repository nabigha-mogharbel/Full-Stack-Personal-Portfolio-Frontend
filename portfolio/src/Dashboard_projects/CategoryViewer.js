import React from "react";
import edit from "../edit.svg"
import trash from "../trash.svg"
import send from "../send.svg"
import axios from "axios";
import Cookies from "universal-cookie"
export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      name: "",
      id:this.props.category._id
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit() {
    this.setState({ isEditMode: !this.state.isEditMode });
  }
  submitProject = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      alert("You can't send empty response");
    } else {
      let request = {};
      if (this.state.name != "") request["name"] = this.state.name;
      if (this.state.url != "") request["url"] = this.state.url;
      let param = this.props.project._id;
    }
  };

  updateData = async (data, id) => {
    id = this.state.id;
    const dataCategories = {
      name: this.state.name,
    };
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")

    try {
      const response = await axios.put(
        `${this.props.backendLink}/dashboard/categories/update/${id}`,
        dataCategories, {headers:{"auth-token":bearer}}
      );

      this.setState({ data: response.data.response });
    } catch (error) {
      console.error(error);
    }
  };

  deleteData = async (id) => {
    id = this.state.id;
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.delete(
        `${this.props.backendLink}/dashboard/categories/delete/${id}`,{headers:{"auth-token":bearer}}
      );
      console.log(response.data.response);
      window.location.reload(false)
    } catch (error) {
      console.log("error deleting dashboard", error);
      console.error(error);
    }
  };

  handleNameInput = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div className="dashboard-card">
        <section className="container-row">
            <h3 className="dashboard-title">{this.props.category.name}</h3>
          {!this.state.isEditMode && <div className="container-column">
            <button onClick={this.toggleEdit} className="dashboard-btns edit">
              <img src={edit}/>
            </button>
            <button
              onClick={this.deleteData}
              className="dashboard-btns cancel"
            >
              <img src={trash} />
            </button>
          </div>}
        </section>

        {this.state.isEditMode && (
          <form className="container-column" onSubmit={this.updateData}>
            <div className="container-row-to-col"><label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleNameInput}
            /></div>
            <div className="container-row">
              <button type="submit" className="dashboard-btns edit"><img src={send}/></button>
              <button
                onClick={this.toggleEdit}
                className="dashboard-btns cancel"
              >
                X
              </button></div>
          </form>
        )}
      </div>
    );
  }
}

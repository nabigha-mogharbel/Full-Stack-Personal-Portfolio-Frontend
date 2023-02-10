import React from "react";
import edit from "../edit.svg"
import trash from "../trash.svg"
import send from "../send.svg"
import axios from "axios";
export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      name: this.props.project.name,
      url: this.props.project.url,
      category: this.props.project.category,
      images:"",
      img:this.props.project.img,
      id: this.props.project._id,
      categories:[]
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit() {
    this.setState({ isEditMode: !this.state.isEditMode });
  }
  submitProject = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.url === "") {
      alert("You can't send empty response");
    } else {
      let request = {};
      if (this.state.name != "") request["name"] = this.state.name;
      if (this.state.url != "") request["url"] = this.state.url;
      let param = this.props.project._id;
      console.log("request", request, param);
    }
  };
  handleNameInput = (e) => {
    this.setState({ name: e.target.value });
  };
  handleUrlInput = (e) => {
    this.setState({ url: e.target.value });
  };
  handleCategoryOption = (e) => {
    this.setState({ category: e.target.value });
  };

  deleteData = async (id) => {
    id = this.state.id;
    try {
      const response = await axios.delete(
        `http://localhost:5000/dashboard/projects/delete/${id}`
      );
      console.log(response.data.response);
    } catch (error) {
      console.log("error deleting dashboard", error);
      console.error(error);
    }
  };

  render() {
    return (
      <div className="dashboard-card">
        <section className="container-row">
          <div className="container-column">
            <h3 className="dashboard-title"> Name:  {this.props.project.name}</h3>
            <a className="dashboard-data" href={this.props.project.url}>
             Url: {this.props.project.url}
            </a>
            <img className="dashboard-img" />
          </div>
          <div>
            <img
              className="dashboard-proj-img"
              width="100px"
              src={`http://localhost:5000/${this.state.img}`}
            />
          </div>
         {!this.state.isEditMode && <div className="container-column">
            <button onClick={this.toggleEdit} className="dashboard-btns edit">
              <img src={edit} />
            </button>
            <button
              onClick={this.deleteProject}
              className="dashboard-btns cancel"
            >
              <img src={trash} onClick={this.deleteData} />
            </button>
          </div>}
        </section>

        {this.state.isEditMode && (
          <form className="container-column" onSubmit={this.submitProject}>
            <div className="container-row-to-col"><label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleNameInput}
            /></div>
            <div className="container-row-to-col"><label htmlFor="url">Link</label>
            <input
              type="text"
              name="url"
              id="url"
              value={this.state.url}
              onChange={this.handleUrlInput}
            /></div>
            <div className="container-row-to-col">
            <label htmlFor="category">Category</label>
            <select
                id="category"
              value={this.state.category}
              onChange={this.handleCategoryOption}
            >
              {this.props.categories.map((ele) => {
                return <option value={ele._id} key={ele._id}>{ele.name}</option>;
              })}
            </select>
            </div>
            <div className="container-row-to-col">
            <label htmlFor="img">Upload project picture</label>
            <input type="file" id="img" name="img" />
            </div>
            <div className="container-row">
              <button type="submit" className="dashboard-btns edit"><img src={send}/></button>
              <button
                onClick={this.toggleEdit}
                className="dashboard-btns cancel"
              >
                X
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

import React from "react";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";
import axios from "axios";
export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded:false,
      isEditMode: false,
      images: "",
      img: this.props.project.img,
      id: this.props.project._id,
      selectedCategory: "",
      name: "",
      url: ""
    };
    this.fileInput = React.createRef();
    this.toggleEdit = this.toggleEdit.bind(this);  }
  toggleEdit() {
    this.setState({ isEditMode: !this.state.isEditMode });
  }
  /*submitProject = (e) => {
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
  };*/

  updateData = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if(this.state.name!=="")formData.append("name", this.state.name);
    if(this.state.url!=="")formData.append("url", this.state.url);
    formData.append("category", this.state.selectedCategory);
    formData.append(
      "images",
      this.fileInput.current.files[0],
      this.fileInput.current.files[0].name
    );
    console.log(formData);
    const url=process.env.REACT_APP_BASE_URL
    url="https://ahmadbadawiportfolio.onrender.com"

    try {
      const response = await axios.put(
        `${url}/dashboard/projects/update/withimg/${this.state.id}`,
        formData,
        {
          headers: {
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data`,
          },
        }
      );
      console.log(response.data);
      alert("yay data");
    } catch (error) {
      console.error(error);
    }
  };


  handleNameInput = (e) => {
    this.setState({ name: e.target.value });
  };
  handleUrlInput = (e) => {
    this.setState({ url: e.target.value });
  };
  handleCategoryOption = (e) => {
    this.setState({ cate: e.target.value });
  };

  deleteData = async (id) => {
    id = this.state.id;
    const url=process.env.REACT_APP_BASE_URL
    url="https://ahmadbadawiportfolio.onrender.com"


    try {
      const response = await axios.delete(
        `${url}/dashboard/projects/delete/${id}`
      );
      console.log(response.data.response);
    } catch (error) {
      console.log("error deleting dashboard", error);
      console.error(error);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  };
  render() {
    let url=process.env.REACT_APP_BASE_URL
    url="https://ahmadbadawiportfolio.onrender.com"

    return (
      <div className="dashboard-card">
        <section className="container-row-to-col flex-center">
          <div className="container-column-">
            <h3 className="dashboard-title">
              {" "}
               {this.props.project.name}
            </h3>
            <a className="dashboard-data" href={this.props.project.url}>
              {this.props.project.url}
            </a>
            <img className="dashboard-img" />
          </div>
          <div>
            <img
              className="dashboard-proj-img"
              style= {{ width: "100px",
              height: "100px",
              backgroundColor: "#ddd",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
              src={`${url}/${this.props.project.img}`}
            />
          </div>
          {!this.state.isEditMode && (
            <div className="container-column-to-row">
              <button onClick={this.toggleEdit} className="dashboard-btns edit">
                <img src={edit} />
              </button>
              <button
                onClick={this.deleteProject}
                className="dashboard-btns cancel"
              >
                <img src={trash} onClick={this.deleteData} />
              </button>
            </div>
          )}
        </section>

        {this.state.isEditMode && (
          <form className="container-column" onSubmit={this.updateData} encType="multipart/form-data">
            <h1>Update</h1>
            <div className="container-row-to-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleNameInput}
              />
            </div>
            <div className="container-row-to-col">
              <label htmlFor="url">Link</label>
              <input
                type="text"
                name="url"
                id="url"
                value={this.state.url}
                onChange={this.handleUrlInput}
              />
            </div>
            <div className="container-row-to-col">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={this.state.selectedCategory}
                onChange={this.handleCategoryOption}
              >
                {this.props.categories.map((ele) => {
                  return (
                    <option value={ele._id} key={ele._id}>
                      {ele.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="container-row-to-col">
              <label htmlFor="img">Upload project picture</label>
              <input
                type="file"
                name="images"
                id="images"
                ref={this.fileInput}
                /* value={this.state.images}
                    onChange={this.handleImage}*/
                className="buttonDownload"
              />
            </div>
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
          </form>
        )}
      </div>
    );
  }
}

import React from "react";
import "../Dashboard_about/Dashboard.css";
import ProjectCard from "./ProjectViewer";
import CategoryCard from "./CategoryViewer";
import axios from "axios";
import Cookies from "universal-cookie"
export default class DashboardProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      categories: [],
      isLoaded: false,
      isProjectAddMode: false,
      isCategoryAddMode: false,
      selectedCategory: "63cf8f3cc4f03511df2e4c5f",
      name: "",
      url: ""    };
    this.fileInput = React.createRef();
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit = (key) => {
    if (key === "isProjectAddMode") {
      this.setState({ isProjectAddMode: true });
    }
    if (key === "isCategoryAddMode") {
      this.setState({ isCategoryAddMode: true });
    }
    if (key === "close") {
      this.setState({ isProjectAddMode: false, isCategoryAddMode: false });
    }
  };

  componentDidMount() {
    this.getData();
    this.getCategories();
    this.setState({isLoaded:true})
  }
  getData = async () => {
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.get(
        `${this.props.backendLink}/dashboard/projects/`, {headers:{"auth-token": bearer }}
      );
      this.setState({ projects: response.data.response });
    } catch (error) {
      console.error(error);
    }
  };

  getCategories = async () => {
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
try {
      const response = await axios.get(
        `${this.props.backendLink}/dashboard/categories/`, {headers:{"auth-token": bearer }}
      );
      let bb=response
      this.setState({ categories:bb.data.response });
    } catch (error) {
      console.error(error);
    }
  };

  addCatergory = async (e) => {
    e.preventDefault();
    const addCatergory = {
      name: this.state.nameCategory,
    };
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.post(
        `${this.props.backendLink}/dashboard/categories/create`, addCatergory, {headers:{"auth-token": bearer }}
      );

      //this.getData();
      window.location.reload(false)
    } catch (error) {
      console.error(error);
    }
  };

  addProject = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("url", this.state.url);
    formData.append("category", this.state.selectedCategory);
    formData.append(
      "images",
      this.fileInput.current.files[0],
      //this.fileInput.current.files[0].name
    );
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.post(
        `${this.props.backendLink}/dashboard/projects/create/`,
        formData,
        {
          headers: {
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data`,
            "auth-token":bearer
          },
        }
      ).then( function (value) {
        alert("success");
        window.location.reload(false)
      },
      function (error) {
        alert("something went wrong");
      })
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleCategoryOption = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  render() {
    return (
      <div className="dashboard-section">
        <h1>Projects</h1>
        <hr />
      {this.state.isLoaded&&  <main className="container-row-to-col">
          {!this.state.isProjectAddMode && !this.state.isCategoryAddMode && (
            <>
              <section className="projects-list container container-column">
                <h2>My projects</h2>
                {this.state.projects.map((ele) => {
                  return (
                    <ProjectCard
                    backendLink={this.props.backendLink}
                      project={ele}
                      categories={this.state.categories}
                      key={ele._id}
                      id={ele._id}
                    />
                  );
                })}
                <button
                  className="dashboard-btns edit"
                  style={{ fontSize: "24px" }}
                  onClick={(e) => this.toggleEdit("isProjectAddMode")}
                >
                  +
                </button>
              </section>
              <hr />
              <section className="projects-list container container-column">
                <h2>Categories</h2>
                {this.state.categories.map((ele) => {
                  return (
                    <CategoryCard backendLink={this.props.backendLink} category={ele} key={ele._id} id={ele._id} />
                  );
                })}
                <button
                  className="dashboard-btns edit"
                  onClick={(e) => this.toggleEdit("isCategoryAddMode")}
                  style={{ fontSize: "24px" }}
                >
                  +
                </button>
              </section>
            </>
          )}
          {this.state.isProjectAddMode && !this.state.isCategoryAddMode && (
            <section>
              <form
                className="container-column"
                onSubmit={this.addProject}
                encType="multipart/form-data"
              >
                <h2>Add a new project</h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <label htmlFor="url">Link</label>
                <input
                  type="text"
                  name="url"
                  id="url"
                  value={this.state.url}
                  onChange={this.handleChange}
                />
                <label htmlFor="personal_pic">Upload project picture</label>
                <input
                  type="file"
                  name="images"
                  id="images"
                  ref={this.fileInput}
                  className="buttonDownload"
                />{" "}
                <div className="container-row-to-col">
                  <label htmlFor="category">Category</label>
                  <select
                    name="selectedCategory"
                    value={this.state.selectedCategory}
                    onChange={this.handleCategoryOption}
                  >
                    {this.state.categories.map((category) => (
                      <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="container-row">
                  <input
                    type="submit"
                    className="dashboard-btns edit"
                    onSubmit={this.addProject}
                  />
                  <button
                    onClick={(e) => this.toggleEdit("close")}
                    className="dashboard-btns cancel"
                  >
                    X
                  </button>
                </div>
              </form>
            </section>
          )}
          {!this.state.isProjectAddMode && this.state.isCategoryAddMode && (
            <section>
              <form className="container-column" onSubmit={this.addCatergory}>
                <h2>Add a new category</h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="nameCategory"
                  id="name"
                  value={this.state.nameCategory}
                  onChange={this.handleChange}
                />
                <div className="container-row">
                  <button type="submit"
                    className="dashboard-btns edit"
                    >send</button> 
                  <button
                    onClick={(e) => this.toggleEdit("close")}
                    className="dashboard-btns cancel"
                  >
                    X
                  </button>
                </div>
              </form>
            </section>
          )}
        </main>}
      </div>
    );
  }
}

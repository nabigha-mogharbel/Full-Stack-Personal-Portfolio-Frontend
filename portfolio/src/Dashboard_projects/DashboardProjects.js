import React from "react";
import "../Dashboard_about/Dashboard.css";
import ProjectCard from "./ProjectViewer";
import CategoryCard from "./CategoryViewer"
import axios from "axios"
export default class DashboardProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      categories: [],
      isProjectAddMode: false,
      isCategoryAddMode:false
    };
    this.handleInput=React.createRef()
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit=(key)=> {
    
    if(key==="isProjectAddMode"){
      this.setState({isProjectAddMode:true });
      console.log("batata", this.state)
    }
    if (key==="isCategoryAddMode") {
      this.setState({isCategoryAddMode:true });
    }
    if(key==="close"){
      console.log("close")
      this.setState({ isProjectAddMode: false, isCategoryAddMode:false });
    }
  }

  componentDidMount() {
    this.getData();
    this.getCategories();
  }
  getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/dashboard/projects/`
      );
      this.setState({ projects: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };
  getCategories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/dashboard/categories/`
      );
      this.setState({ categories: response.data.response });
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div className="dashboard-section">
        <h1>Projects</h1>
          <hr />
        <main className="container-row-to-col">
          
          {!this.state.isProjectAddMode && !this.state.isCategoryAddMode &&(<>
            <section className="projects-list container container-column">
                <h2>My projects</h2>
              {this.state.projects.map((ele) => {
                return <ProjectCard  project={ele} categories={this.state.categories} key={ele._id} id={ele._id}/>;
              })}
              <button className="dashboard-btns edit" style={{fontSize:"24px"}} onClick={e => this.toggleEdit("isProjectAddMode")}>+</button>
            </section>
            <hr/>
            <section className="projects-list container container-column">
                <h2>Categories</h2>
                {this.state.categories.map((ele) => {
                return <CategoryCard category={ele} key={ele._id} id={ele._id}/>;
              })}
              <button className="dashboard-btns edit" onClick={e => this.toggleEdit("isCategoryAddMode")} style={{fontSize:"24px"}}>+</button>
            </section></>
          )}
          {this.state.isProjectAddMode && !this.state.isCategoryAddMode && (
            <section>
              <form className="container-column" onSubmit={this.submitAbout}>
                <h2>Add a new project</h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleNameInput}
                />
                <label htmlFor="url">Link</label>
                <input
                  type="text"
                  name="url"
                  id="url"
                  value={this.state.url}
                  onChange={this.handleUrlInput}
                />
                <label htmlFor="personal_pic">
                  Upload project picture
                </label>
                <input type="file" id="img" name="img" ref={this.handleInput}/>
                <div className="container-row" >
                  <input type="submit" className="dashboard-btns edit" />
                  <button
                    onClick={e => this.toggleEdit("close")}
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
              <form className="container-column" onSubmit={this.submitAbout}>
                <h2>Add a new category</h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleNameInput}
                />
                <div className="container-row">
                  <input type="submit" className="dashboard-btns edit" />
                  <button
                    onClick={e => this.toggleEdit("close")}
                    className="dashboard-btns cancel"
                  >
                    X
                  </button>
                </div>
              </form>
            </section>
          )}
        </main>
      </div>
    );
  }
}

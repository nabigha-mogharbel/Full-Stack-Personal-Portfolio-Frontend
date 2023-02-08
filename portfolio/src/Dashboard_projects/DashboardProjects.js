import React from "react";
import "../Dashboard_about/Dashboard.css";
import ProjectCard from "./ProjectViewer";
import CategoryCard from "./CategoryViewer"
export default class DashboardProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          _id:"63d1064ee21c268433dd981b",
          name: "Sweet",
          category_id:"63cf8f3cc4f03511df2e4c5f",
          img: "uploads/images-1674643022401.jpeg",
          url: "sweeturl",
          __v: { $numberInt: "0" },
        },
        {
          _id: "63d2760aab08077dc2349da1",
          name: "batata",
          category_id:"63cf8f3cc4f03511df2e4c5f",
          img: "uploads/images-1674737162965.jpeg",
          url: "jfjfjf",
          __v: { $numberInt: "0" },
        },
      ],
      categories: [
        {
          _id:"63cf8f3cc4f03511df2e4c5f",
          name: "Company",
          __v: { $numberInt: "0" },
        },
        {
          _id:"63cf9afa7af942b7f5947755" ,
          name: "Freelance",
          __v: { $numberInt: "0" },
        },
        {
          _id:"63cf9af17af942b7f5947753",
          name: "Intern",
          __v: { $numberInt: "0" },
        },
      ],
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
                return <ProjectCard categories={this.state.categories} project={ele} key={ele._id} id={ele._id}/>;
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

import React from "react";
import "./Dashboard.css";
import edit from "../edit.svg"
import trash from "../trash.svg"
import send from "../send.svg"
export default class DashboardAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        _id:"63d57fab789534000a7ff8f7",
        bio: "I'm a pasionate Developer.",
        personal_pic: "uploads/images-1674936235465.jpeg",
        expertise: "Front-End Web Developer",
        __v: { $numberInt: "0" },
      },
      isEditMode:false,
        bio:"",
        expertise:""
    };

    this.fileInput = React.createRef();
    this.toggleEdit=this.toggleEdit.bind(this);
    this.handleBioInput=this.handleBioInput.bind(this);
    this.handleExpertiseInput=this.handleExpertiseInput.bind(this);
  }
  valid=false;
  toggleEdit(){
    this.setState({isEditMode:!this.state.isEditMode});
    if(!this.state.isEditMode){
        this.setState({bio:"", expertise:""})
    }
  }
  handleBioInput(e){
    this.setState({bio:e.target.value})
  }
  handleExpertiseInput(e){
    this.setState({expertise:e.target.value})
  }
  submitAbout=(e) => {
    e.preventDefault();
    if(this.state.bio==="" && this.state.expertise===""){
        console.log("You can't send empty data")
    }else{
       let request={
       }
       if(this.state.bio!="")request["bio"]=this.state.bio;
       if(this.state.expertise!="") request["expertise"]=this.state.expertise;
       console.log(request)
        this.toggleEdit()
    }
  }
  render() {
    return (
      <div className="dashboard-section">
        <main>
          <h1>About me</h1>
          <hr />
          {!this.state.isEditMode&& 
          <>
          <section className="container-row-to-col">
          <div >
            <h2 className="dashboard-title">My picture</h2>
            <img className="dashboard-pp" src={this.state.about.personal_pic} width="200px"/>
            </div>
            <div className="container-column">
            <h2 className="dashboard-title">Bio</h2>
            <p className="dashboard-data">{this.state.about.bio}</p>
            <h2 className="dashboard-title">Expertise</h2>
            <p className="dashboard-data">{this.state.about.expertise}</p>
            </div>
           
          </section>
          <button onClick={this.toggleEdit} style={{marginTop:"20px"}} className="dashboard-btns edit"><img src={edit}/></button>
          </>}
          {
            this.state.isEditMode && <section>
                <form className="container-column" onSubmit={this.submitAbout}>
                    <label htmlFor="bio">Bio</label>
                    <input type="text" name="bio" id="bio" value={this.state.bio} onChange={this.handleBioInput}/>
                    <label htmlFor="expertise">Expertise</label>
                    <input type="text" name="expertise" id="expertise" value={this.state.expertise} onChange={this.handleExpertiseInput}/>
                    <label htmlFor="personal_pic">Upload project picture</label>
                    <input type="file" name="personal_pic" id="personal_pic" ref={this.fileInput}/>
                    <div className="container-row" >
                    <button type="submit" className="dashboard-btns edit"><img src={send} width="20px"/></button>
                    <button onClick={this.toggleEdit} className="dashboard-btns cancel">X</button>
                    </div>
                </form>   
            </section>
          }
        </main>
      </div>
    );
  }
}
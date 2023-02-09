import React from "react";
import "./Dashboard.css";
import edit from "../edit.svg"
import trash from "../trash.svg"
import send from "../send.svg"
import axios from "axios";
export default class DashboardAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
      isEditMode:false,
        bio:"",
        expertise:"",
        personal_pic:"",
        id:"",
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
        // this.setState({bio:"", expertise:""})
    }
  }
  componentDidMount(){
    this.getData()
    }
  handleBioInput(e){
    this.setState({bio:e.target.value})
  }
  handleExpertiseInput(e){
    this.setState({expertise:e.target.value})
  }
  getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5008/dashboard/about/`);
      // this.setState({ about: response.data[0]. });
      this.setState({bio: response.data[0].bio});
      this.setState({expertise: response.data[0].expertise});
      this.setState({personal_pic: response.data[0].personal_pic});
      this.setState({id: response.data[0]._id});
      console.log(response)
    } catch (error) {
      console.error(error);
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
  };
  // submitAbout=(e) => {
  //   e.preventDefault();
  //   if(this.state.bio==="" && this.state.expertise===""){
  //       console.log("You can't send empty data")
  //   }else{
  //      let request={
  //      }
  //      if(this.state.bio!="")request["bio"]=this.state.bio;
  //      if(this.state.expertise!="") request["expertise"]=this.state.expertise;
  //      console.log(request)

  //       alert("yay data")
  //   }
  submitAbout = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("bio", this.state.bio);
    formData.append("expertise", this.state.expertise);
    formData.append("personal_pic", new Blob([this.state.personal_pic]), this.state.personal_pic.name);
  
    try {
      const response = await axios.put(
        `http://localhost:5008/dashboard/about/img/${this.state.id}`,
        formData,
         {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          }
        }
      );
      console.log(response.data);
      alert("yay data");
    } catch (error) {
      console.error(error);
    }
  };
  
  
  render() {
    
    return (
      <div>
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
              <p className="dashboard-data">{this.state.bio}</p>
              <h2 className="dashboard-title">Expertise</h2>
              <p className="dashboard-data">{this.state.expertise}</p>
            </div>
            <div>
              <h2 className="dashboard-title">My picture</h2>
              {this.state.personal_pic}
              <img className="dashboard-pp" src={`http://localhost:5008/${this.state.personal_pic}`} alt="MY Profile" />
            </div>
          </section>
          <button onClick={this.toggleEdit} className="dashboard-btns edit">
            <img src={edit} alt="Icon" />
          </button>
          {this.state.isEditMode && (
            <section>
              <form className="container-column" onSubmit={this.submitAbout}>
                <label htmlFor="bio">Bio</label>
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  value={this.state.bio}
                  onChange={this.handleBioInput}
                />
                <label htmlFor="expertise">Expertise</label>
         
                <input
                  type="text"
                  name="expertise"
                  id="expertise"
                  value={this.state.expertise}
                  onChange={this.handleExpertiseInput}
                />
                <label htmlFor="personal_pic">Upload project picture</label>
                <input
                  type="file"
                  name="personal_pic"
                  id="personal_pic"
                  ref={this.fileInput}
                  className="buttonDownload"
                />
                <div className="container-row">
                  <button type="submit" className="dashboard-btns edit">
                    <img src={send} />
                  </button>
                  <button onClick={this.toggleEdit} className="dashboard-btns cancel">
                    X
                  </button>
                </div>
              </form>
           
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
          )}
        </main>
      </div>
    );
  }
  
}
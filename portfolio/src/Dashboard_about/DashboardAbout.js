import React from "react";
import "./Dashboard.css";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";
import axios from "axios";
export default class DashboardAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
      isEditMode: false,
      isLoaded:false,
      bio: "",
      expertise: "",
      images: "",
      id: "",
    };

    this.fileInput = React.createRef();
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleBioInput = this.handleBioInput.bind(this);
    this.handleExpertiseInput = this.handleExpertiseInput.bind(this);
  }

  valid = false;

  toggleEdit() {
    this.setState({ isEditMode: !this.state.isEditMode });
    if (!this.state.isEditMode) {
      // this.setState({bio:"", expertise:""})
    }
  }
  componentDidMount() {
    this.getData();
  }
  handleBioInput(e) {
    this.setState({ bio: e.target.value });
  }
  handleExpertiseInput(e) {
    this.setState({ expertise: e.target.value });
  }
  /*handleImage=(e) =>{
    this.setState({ images:this.fileInput.current.files[0].name});
    console.log(this.state)
  }*/
  getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/dashboard/about/`
      );
      // this.setState({ about: response.data[0]. });
     /* this.setState({ bio: response.data[0].bio });
      this.setState({ expertise: response.data[0].expertise });
      this.setState({ personal_pic: response.data[0].personal_pic });
      this.setState({ id: response.data[0]._id });*/
      this.setState({data:response.data[0], isLoaded:true})
      console.log(this.state.data);
    } catch (error) {
      console.error(error);
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
    formData.append("bio", this.state.data.bio);
    formData.append("expertise", this.state.data.expertise);
    formData.append(
      "images",this.fileInput.current.files[0],this.fileInput.current.files[0].name
    );
    console.log(formData);
    try {
      const response = await axios.put(
        `http://localhost:5000/dashboard/about/img/${this.state.data._id}`,
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

  render() {
    return (
      <div className="dashboard-section dashboard-section_about">
        <main>
          <h1>About me</h1>
          <hr />
          {/* {!this.state.isEditMode&&  */}
         {this.state.isLoaded&&  <>
           {!this.state.isEditMode && <> <section className="container-row-to-col">
              <div className="container-column flex-start" id="about_container">
                <h2 className="dashboard-title">Bio</h2>
                <p className="dashboard-data">{this.state.data.bio}</p>
                <h2 className="dashboard-title">Expertise</h2>
                <p className="dashboard-data">{this.state.data.expertise}</p>
              </div>
              <div>
                <h2 className="dashboard-title">My picture</h2>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "#ddd",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="dashboard-pp"
                    src={`http://localhost:5000/${this.state.data.personal_pic}`}
                    alt="MY Profile"
                    style={{
                   width:"200px", height:"200px", borderRadius:"50%"

                    }}
                  />
                  
                </div>{" "}
              </div>
            </section>
            <button onClick={this.toggleEdit} className="dashboard-btns edit">
              <img src={edit} alt="Icon" />
            </button></>}
            {this.state.isEditMode && (
              <section>
                <form className="container-column" onSubmit={this.submitAbout} encType='multipart/form-data'>
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
                    name="images"
                    id="personal_pic"
                    ref={this.fileInput}
                  /* value={this.state.images}
                    onChange={this.handleImage}*/
                    className="buttonDownload"
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
                </form>
              </section>
            )}
          </>}
        </main>
      </div>
    );
  }
}

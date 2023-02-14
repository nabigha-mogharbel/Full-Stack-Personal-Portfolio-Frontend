import React from "react";
import "./Dashboard.css";
import edit from "../edit.svg";
import trash from "../trash.svg";
import send from "../send.svg";
import axios from "axios";
import Cookies from "universal-cookie"
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
      success:false,
    failed:false,
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
  getData = async () => {
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.get(
        `${this.props.backendLink}/dashboard/about/`, {headers:{"auth-token": bearer }}
      );
      this.setState({data:response.data[0], isLoaded:true})
      console.log(this.state.data);
    } catch (error) {
      this.setState({success:false,failed:true});

      console.error(error);
    }
  };

  submitAbout = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("bio", this.state.data.bio);
    formData.append("expertise", this.state.data.expertise);
    formData.append(
      "images",this.fileInput.current.files[0],this.fileInput.current.files[0].name
    );
    console.log(formData);
    const cookie=new Cookies()
    let bearer=cookie.get("auth-token")
    try {
      const response = await axios.put(
        `${this.props.backendLink}/dashboard/about/img/${this.state.data._id}`,
        formData,
        {
          headers: {
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data`,
            "auth-token":bearer
          },
        }
      );
      console.log(response.data);
      this.setState({success:true});

      alert("yay data");
    } catch (error) {
      this.setState({success:false,failed:true});
      console.error(error);
    }
  };

  render() {
    let backendLink=this.props.backendLink
    return (
      <div className="dashboard-section dashboard-section_about">
        <main>
        {this.state.success && (
              <div
                className="alert alert-success"
                role="alert"
                style={{
                  width: "80%",
                  margin: "20px auto",
                  color: "#3c763d",
                  backgroundColor: "#dff0d8",
                }}
              >
                <strong>Well done!</strong> All Procedure has been successfully.
              </div>
            )}
            {this.state.failed && (
              <div
                className="alert alert-success"
                role="alert"
                style={{
                  width: "80%",
                  margin: "20px auto",
                  color: "#FF5733",
                  backgroundColor: "#EFAC9E",
                }}
              >
                <strong>Alert!</strong> Somthings  has been unSuccessfully!!!!!!
              </div>
            )}
          <h1>About me</h1>
          <hr />
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
                    src={`${backendLink}/${this.state.data.personal_pic}`}
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

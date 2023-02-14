//f8bb86
import React from "react";
import "./Resume.css";
import dateIcon from "../Date_range_fill.svg"

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExperience: true,
      isEducation: false,
    };
    this.educationToggle = this.educationToggle.bind(this);
    this.experienceToggle = this.experienceToggle.bind(this);
  }

  incrementer(number) {
    console.log(this.state);
  }
  enumerateProjects=()=>{
    let i=0;
    for(i; i<=this.state.response.projects.length; i++){
      setTimeout()
      return i

    }
  }
  educationToggle() {
    this.setState({ isExperience: false });
    this.setState({ isEducation: true });
  }
  experienceToggle() {
    this.setState({ isExperience: true });

    this.setState({ isEducation: false });
  }
  dateTrim(rawDate){
    let year=rawDate.slice(0,4)
    let month=rawDate.slice(5,7)
    switch(month){
      case("01"):
       month="Jan"
      break;
      case("02"):
       month="Feb"
      break;case("03"):
       month="Mar"
      break;case("04"):
       month="Apr"
      break;case("05"):
       month="May"
      break;case("06"):
       month="June"
      break;case("07"):
       month="July"
      break;case("08"):
       month="Aug"
      break;case("09"):
       month="Sep"
      break;case("10"):
      break;case("11"):
       month="Nov"
      break;case("12"):
       month="Dec"
      break;
    }
    let value=year + " " + month    
    return value
  }
  render() {

    return (
      <>
        <section className="section resume-section ">
          <div className="resume-details">
            <div className="resume-toggle">
            <button className={this.state.isExperience?"resume-toggler active":"resume-toggler"} onClick={this.experienceToggle}
              >
                Experience
              </button>
              <button className={this.state.isEducation?"resume-toggler active":"resume-toggler"} onClick={this.educationToggle}>
                Education
              </button>
              
            </div>
            <div className="container">
             {this.state.isEducation && <ul className="resume-education">
              {this.props.eduData.map(ele => {
                    return <li className="resume-element" key={ele._id}>
                            <p className="title-big">{ele.major}</p>
                            <p className="title-med">{ele.institute}</p>
                            <p className="title-med">{ele.degree}</p>
                            <div className="resume-element-date"><img src={dateIcon} className="icons"/> 
                            <p className="text-date">{this.dateTrim(ele.startDate)}</p>
                            {ele.endDate? <p className="test-date"> - {this.dateTrim(ele.endDate)}</p> : <p className="test-date marked"> - Present</p> }
                            </div>
                        </li>
                })}
              </ul>}
              {this.state.isExperience && <ul className="resume-experience">
                {this.props.expData.map((ele) => {
                  return (
                    <li className="resume-element" key={ele._id}>
                      <p className="title-big">{ele.name}</p>
                      <p className="title-med">{ele.companyName}</p>
                      <div className="resume-element-date"><img src={dateIcon} className="icons"/> 
                      <p className="text-date">{this.dateTrim(ele.startDate)}</p>
                      {ele.endDate? <p className="test-date">- {this.dateTrim(ele.endDate)}</p> : <p className="test-date marked"> - Present</p> }
                      </div>
                      
                    </li>
                  );
                })}
              </ul>}
            </div>
          </div>
          <div className="resume-summary">
            
            <p>9+
            Years
            Experience</p>
            
            
              <p>+
              Completed
              Projects</p>
            
          
            <p>+
            Companies</p>
          
          </div>
        </section>
      </>
    );
  }
}
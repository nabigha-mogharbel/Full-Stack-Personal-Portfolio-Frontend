import React, { Component } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css"
import  Swal from "sweetalert"
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      email: '',
      subject: '',
      status: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

 
  handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send('service_71z4ebl', 'template_jzjfp3t', this.state,'2Z71ko7VLhOKMSIV6')
      .then((response) => {
        this.setState({ status: response.status });
        console.log('SUCCESS!', response.status, response.text);
        Swal({
          title: 'Success',
          text: 'The email was sent successfully!',
          icon: 'success',
        });
      }, (error) => {
        this.setState({ status: error });
        console.log(this.state.status);
        console.log('FAILED...', error);
        Swal({
          title: 'Error',
          text: 'There was an error sending the email. Please try again later.',
          icon: 'error',
        });
      });
  }
  render() {
    return (
      <div className="contact">
 
        <div className="title-text"><h2 className="contact-title typing">
          Do you have a project? 
          I would love  to help.
        </h2>
        </div>
        
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <span className="input-name">
              Name:
            </span>
            <input
              type="text"
              name="name"
              id="name"
              className="name"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="subject">
            <span className="input-name">
              Subject:
            </span>
            <input
              type="text"
              name="subject"
              id="subject"
              className="subject"
              value={this.state.subject}
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            <span className="input-name">
              Email address:
            </span>
            <input
              type="text"
              name="email"
              id="email"
              className="email"
              value={this.state.email}
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="messageinfo">
            <span className="input-name">
              Tell about your project:
            </span>
            <textarea
              name="message"
              id="messageinfo"
              className="messageinfo"
              value={this.state.description}
              required
              onChange={this.handleChange}
            />
          </label>
          <button className="btn send-btn" type="submit">
            Send
          </button>
        </form>
        
      </div>
    );
  }
}

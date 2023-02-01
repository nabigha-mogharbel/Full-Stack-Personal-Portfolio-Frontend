import React, { Component } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css"
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      email: '',
      description: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    
    // console.log();
    emailjs.send('service_6ai8gt3', 'template_cme4c8k', this.state,'KHAxhaan_i50DPSlc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  
  }

  render() {
    return (
      <div className="contact">
        <h2 className="contact-title typing">
          Do you have a project?
          <br />
          I would love to help.
        </h2>
        
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
              // value={this.state.description}
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
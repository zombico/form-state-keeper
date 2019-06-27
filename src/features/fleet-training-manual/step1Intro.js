import React, { Component } from 'react';

class Step1 extends Component {
  state={
    name: '',
    pin: ''
  }
  handleChange =  async e => {
    await this.setState({ [e.target.name]: e.target.value });    
    this.props.handleStep1(this.state)
  };

  render() {
    return (
      <>
        <progress value="20" max="100"></progress>
        <h1>Welcome to technician training</h1>
        <p>The Automation Technician program provides an introduction to industrial automation including digital electronic, process control and programming of PLCs, robotic and SCADA systems. </p>
        <p>The program examines applications and examples of automated manufacturing systems including both the theory and function of digital and industrial electronics hydraulics and pneumatics, robotic systems, digital programming languages and alarm management. No background in Automation is required.</p>
        <br/>
        <div className="">
          <label>Name:</label>
          <input                        
            onChange={this.handleChange}
            name="name"
            value={this.props.step1Info.name ? this.props.step1Info.name : this.state.name}
          />
          <br /><br />
          <label>Employee PIN:</label>
          <input                        
            onChange={this.handleChange}
            name="pin"
            value={this.props.step1Info.pin ? this.props.step1Info.pin : this.state.pin}
          />
        </div>     
      </>
    )
  }
}

export default Step1;
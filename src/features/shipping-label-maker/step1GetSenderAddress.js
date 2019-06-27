import React, { Component } from 'react';

class Step1 extends Component {
  state={
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  }
  handleChange =  async e => {
    await this.setState({ [e.target.name]: e.target.value });    
    this.props.handleFrom(this.state)
  };

  render() {
    return (
      <>
        <progress value="20" max="100"></progress>
        <h1>Enter the sender's address:</h1>
        <div className="field-full">
          <label>Name:</label>
          <input            
            className="fullwidth" 
            onChange={this.handleChange}
            name="name"
            value={this.props.fromInfo.name ? this.props.fromInfo.name : this.state.name}
          />
        </div>
        <div className="field-full">
          <label>Street:</label>
          <input
            className="fullwidth" 
            onChange={this.handleChange}
            name="street"
            value={this.props.fromInfo.street ? this.props.fromInfo.street : this.state.street}
          />
        </div>
        <div className="field-justify">
        <label>City:</label>
        <input 
          onChange={this.handleChange}
          name="city"
          value={this.props.fromInfo.city ? this.props.fromInfo.city : this.state.city}
        />

        <label>State:</label>
        <input 
          onChange={this.handleChange}
          name="state"
          value={this.props.fromInfo.state ? this.props.fromInfo.state : this.state.state}
        />

        <label>Zip:</label>
        <input 
          onChange={this.handleChange}
          name="zip"
          value={this.props.fromInfo.zip ? this.props.fromInfo.zip : this.state.zip}
        />
        </div>
      </>
    )
  }
}

export default Step1;
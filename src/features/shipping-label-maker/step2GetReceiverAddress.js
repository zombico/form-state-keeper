import React, { Component } from 'react';

class Step2 extends Component {
  state={
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  }
  handleChange =  async e => {
    await this.setState({ [e.target.name]: e.target.value });    
    this.props.handleTo(this.state)
  };

  render() {
    return (
      <>
        <progress value="40" max="100"></progress>
        <h1>Enter the receiver's address:</h1>
        <div className="field-full">
          <label>Name:</label>
          <input
            className="fullwidth"  
            onChange={this.handleChange}
            name="name"
            value={this.props.toInfo.name ? this.props.toInfo.name : this.state.name}          
          />
        </div>
        <div className="field-full">
          <label>Street:</label>
          <input
          className="fullwidth"  
            onChange={this.handleChange}
            name="street"
            value={this.props.toInfo.street ? this.props.toInfo.street : this.state.street}
          />
        </div>
        <div className="field-justify">
          <label>City:</label>
          <input 
            onChange={this.handleChange}
            name="city"
            value={this.props.toInfo.city ? this.props.toInfo.city : this.state.city}
          />

          <label>State:</label>
          <input 
            onChange={this.handleChange}
            name="state"
            value={this.props.toInfo.state ? this.props.toInfo.state : this.state.state}
          />

          <label>Zip:</label>
          <input 
            onChange={this.handleChange}
            name="zip"
            value={this.props.toInfo.zip ? this.props.toInfo.zip : this.state.zip}
          />
        </div>
      </>
    )
  }
}

export default Step2;
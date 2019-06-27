import React, { Component } from 'react';

class Step3 extends Component {
  state={
    weight: ''
  }
  handleChange =  async e => {
    await this.setState({ [e.target.name]: parseInt(e.target.value) });    
    this.props.handleWeight(this.state.weight)
  };
  render() {
    return (
      <>
        <progress value="60" max="100"></progress>
        <h1>Enter the item's weight:</h1>
        <label>Lbs:</label>
        <input 
          onChange={this.handleChange}
          type="number"
          name="weight"
          value={this.props.weightInfo ? this.props.weightInfo : this.state.weight}
        />
      </>
    )
  }
}

export default Step3;
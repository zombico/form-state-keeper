import React, { Component } from 'react';

class Step3 extends Component {
  state={
    question1: '',
    question2: '',
    question3: ''
  }
  handleChange =  async e => {
    await this.setState({ [e.target.name]: parseInt(e.target.value) });    
    this.props.handleStep3(this.state)
  };
  render() {    
    return (
      <>
        <progress value="40" max="100"></progress>
        <h1>Quiz 1</h1>
        <label>1. How many T3 cables can a T1 trunk contain?</label>
        <input 
          onChange={this.handleChange}
          type="number"
          name="question1"
          value={this.props.step3Info.question1 ? this.props.step3Info.question1 : this.state.question1}
        />
        <br /><br />
        <div className="">
          <label>2. Fiber optics is made from silk.  </label>          
          <input 
            type="radio"
            onChange={this.handleChange}  
            name="question2"            
            checked={this.props.step3Info.question2 === 1}
            value="1"
          />
          True
          <input 
            type="radio"
            onChange={this.handleChange}  
            name="question2"            
            checked={this.props.step3Info.question2 === 0}
            value="0"
          />
          False          
        </div>

        <div className="">
          <label>3. Name the global standard for technician certification  </label>          
          <input 
            type="radio"
            onChange={this.handleChange}  
            name="question3"            
            checked={this.props.step3Info.question3 === 0}
            value="0"
          />
          CSPA
          <input 
            type="radio"
            onChange={this.handleChange}  
            name="question3"            
            checked={this.props.step3Info.question3 === 1}
            value="1"
          />
          CTSP
          <input 
            type="radio"
            onChange={this.handleChange}  
            name="question3"            
            checked={this.props.step3Info.question3 === 2}
            value="2"
          />
          TSCP
        </div>
      </>
    )
  }
}

export default Step3;
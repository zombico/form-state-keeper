import React, { Component } from 'react';

const ShippingOption = {
  ground: 1,
  priority: 2
}

class Step4 extends Component {
  state={
    shippingOption: 1,
    shippingCost: ''
  }
  handleChange =  async e => {    
    await this.setState({ [e.target.name]: parseInt(e.target.value) });
        
    let shippingOption = this.state.shippingOption    
    const weight = this.props.weightInfo
    
    const shippingRate = 0.40;
    let newCost = weight * shippingRate * (shippingOption === ShippingOption.ground ? 1 : 1.5);    
    this.setState({ shippingCost: newCost })

    const info = this.state.shippingOption    
    
    this.props.handleShippingOption(info)
  };

  componentDidMount() {
    if (this.props.shippingOptionInfo.length !== 0 ) {
      let shippingOption = this.props.shippingOptionInfo
      const weight = this.props.weightInfo
      
      const shippingRate = 0.40;
      let newCost = weight * shippingRate * (shippingOption === ShippingOption.ground ? 1 : 1.5);    
      this.setState({ shippingCost: newCost })
    }
  }


  render() {
    
    const selected = this.props.shippingOptionInfo;
    
    let shippingCost = this.state.shippingCost

    return (
      < >
        <progress value="80" max="100"></progress>
        <h1>Shipping Options</h1>   
        <div className="radio">
          <label>
            <input 
              type="radio"
              onChange={this.handleChange}  
              name="shippingOption"            
              checked={selected === 1}
              value="1"
            />
            Ground 
          </label>

          <label>
            <input 
              type="radio"
              onChange={this.handleChange}
              name="shippingOption"
              checked={selected === 2}
              value="2"
            />
            Priority
          </label>        
        </div>     
        <h2>Shipping cost: {shippingCost}</h2>

      </>
    )
  }
}

export default Step4;
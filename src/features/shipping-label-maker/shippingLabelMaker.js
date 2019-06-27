import React, { Component } from 'react';
import Wizard from '../../core/components/wizard/wizard'
import Step1 from './step1GetSenderAddress';
import Step2 from './step2GetReceiverAddress';
import Step3 from './step3GetWeight';
import Step4 from './step4GetShippingOption';
import Step5 from './step5Confirm';


class ShippingLabelMaker extends Component {  
  state={
    from: {},
    to: {},
    weight: 0,
    shippingOption: ''
  }

  handleFrom(info) {    
    this.setState({ from: info })
  }
  handleTo(info) {    
    this.setState({ to: info })
  }
  handleWeight(info) {
    this.setState({ weight: info})
  }
  handleShippingOption(info) {
    this.setState({ shippingOption: info })
  }
  handleComplete() {
    console.log('Complete')
  }

  render() {
  const shippingInfo = this.state;    
  const steps = [ 
    <Step1 
      fromInfo={this.state.from} 
      handleFrom={(e) => this.handleFrom(e)} 
    />, 
    <Step2 
      toInfo={this.state.to} 
      handleTo={(e) => this.handleTo(e)} 
    />, 
    <Step3 
      weightInfo={this.state.weight} 
      handleWeight={(e) => this.handleWeight(e)} 
    />, 
    <Step4 
      shippingOptionInfo={this.state.shippingOption} 
      handleShippingOption={(e) => this.handleShippingOption(e)}
      weightInfo={this.state.weight}
    />, 
    <Step5
      wizardContext={this.state}       
    /> 
  ]
  
    return (
      
        <Wizard 
          header={() => "Shipping Label Maker"}
          wizardContext={shippingInfo}           
          steps={steps}
          // onComplete={() => "Complete"}
          onComplete={() => this.handleComplete()}
        />
      
    )
  }
}

export default ShippingLabelMaker;
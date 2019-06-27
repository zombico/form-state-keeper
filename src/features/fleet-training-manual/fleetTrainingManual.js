import React, { Component } from 'react'
import Wizard from '../../core/components/wizard/wizard'
import Step1 from './step1Intro'
import Step2 from './step2Content'
import Step3 from './step3Quiz'
import Step4 from './step4Content'

class FleetTrainingManual extends Component {  
  state={
    employeeInfo: {},
    quiz1: {},
    quiz2: {},
    quiz3: {}
  }

  handleStep1(info) {
    this.setState({ employeeInfo: info })    
  }

  handleStep3(info) {
    this.setState({ quiz1: info })
  }

  handleComplete() {
    console.log('Training Complete')
  }

  render(){
    const fleetTrainingInfo = this.state
    const steps = [
      <Step1 
        step1Info={this.state.employeeInfo}
        handleStep1={(e) => this.handleStep1(e)}
      />,
      <Step2 />,
      <Step3 
        step3Info={this.state.quiz1}
        handleStep3={(e) => this.handleStep3(e)}
      />,
      <Step4 />
    ]
    return(
      <Wizard 
          header={() => "Shipping Label Maker"}
          wizardContext={fleetTrainingInfo}           
          steps={steps}          
          onComplete={() => this.handleComplete()}
        />
      
    )
  }
}

export default FleetTrainingManual
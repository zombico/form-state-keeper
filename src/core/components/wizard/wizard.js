import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Step from './step'

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentStep: 0
    }
    this.onAction = this.onAction.bind(this)
  }
  
  onAction(action) {
    const WizardAction = {
      prev: 1,
      next: 2,
      end: 3
    };
    
    if (action === WizardAction.next) {
      const newStep = this.state.currentStep + 1;
      this.setState({ currentStep: newStep })
    } 
    else if (action === WizardAction.prev && this.state.currentStep !== 0) {
      const newStep = this.state.currentStep - 1;
      this.setState({ currentStep: newStep })
    }
    else if (action === WizardAction.end) {
      this.props.onComplete()
    }
  }

  render() {
    const currentStep = this.state.currentStep
    
    return (      
          
        <Step 
          currentStep={currentStep}
          length={this.props.steps.length}
          stepContents={this.props.steps[currentStep]}
          onAction={this.onAction}
          wizardContext={this.props.wizardContext}          
        />
      
    )
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
  };
export default Wizard;
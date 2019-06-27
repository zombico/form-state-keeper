import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Step extends Component { 
  render() {             
    return (      
      <>      
        {this.props.stepContents}
        <div className="buttonpanel">       
        {
          this.props.currentStep !== 0 && <button onClick={() => this.props.onAction(1)}>Previous</button>
        }
        {
          this.props.currentStep !== this.props.length-1 && <button onClick={() => this.props.onAction(2)}>Next</button>
        }
        {
          this.props.currentStep === this.props.length-1 && <button onClick={() => this.props.onAction(3)}>Submit</button>
        }
        </div>
      </>
    )
  }
}

Step.propTypes = {  
  currentStep: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  stepContents: PropTypes.object.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
  };

  export default Step;
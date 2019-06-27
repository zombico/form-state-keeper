import React, { Component } from 'react'
import './app.css'
import ShippingLabelMaker from './features/shipping-label-maker/shippingLabelMaker'
import FleetTrainingManual from './features/fleet-training-manual/fleetTrainingManual'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <ShippingLabelMaker />
        {/* <FleetTrainingManual /> */}
      </div>
    );
  }
}

export default App;

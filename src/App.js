import React, { Component } from 'react'
import './App.css'
import ShippingLabelMaker from './features/shipping-label-maker/shippingLabelMaker'
import FleetTrainingManual from './features/fleet-training-manual/fleetTrainingManual'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Link 
          to="/training"
        ><a>Training</a>
        </Link>
        <br/><br/>
        <Link 
          to="/shipping"
        ><a>Shipping</a>
        </Link>
        <Route
          path="/training"
          render={() => {                
            return (
              <FleetTrainingManual />
            )
          }}               
        />
        <Route
          path="/shipping"
          render={() => {                
            return (
              <ShippingLabelMaker />
            )
          }}               
        />
        </Router>          
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Step5 extends Component {
  render() {
    const review = this.props.wizardContext
    return (
      <div>
        <progress value="99" max="100"></progress>
        <h1>Review and Confirm </h1>
        <h2>From</h2>
        <div className="fullwidth">{review.from.name}</div>
        <div className="fullwidth">{review.from.street}</div>
        <div className="fullwidth">{review.from.city}, {review.from.state}, {review.from.zip} </div>

        <h2>To</h2>
        <div className="fullwidth">{review.to.name}</div>
        <div className="fullwidth">{review.to.street}</div>
        <div className="fullwidth">{review.to.city}, {review.to.state}, {review.to.zip} </div>
      </div>
    )
  }
}

export default Step5;
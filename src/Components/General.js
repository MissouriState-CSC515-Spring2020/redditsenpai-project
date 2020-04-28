import React, { Component } from 'react';
import logo from './smug_rem.jpeg';

class General extends Component {
  render() {
    return (
      <div className="general">
        <div className="general-header">
          <img src={logo} className="gerneral-logo" alt="logo" />
          <h2>Welcome to my Checkpoint 6!</h2>
        </div>
      </div>
    );
  }
}

export default General;
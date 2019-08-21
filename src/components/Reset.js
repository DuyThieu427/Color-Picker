import React, { Component } from 'react';

class Reset extends Component {

	onReset(reset){
		this.props.onReceiveReset(reset);
	}

  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={() => this.onReset(10)}>Reset</button>
    );
  }
}

export default Reset;
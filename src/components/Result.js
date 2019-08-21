import React, { Component } from 'react';

class Result extends Component {

  setBorder(){
    return {
      fontSize : this.props.fontSize + 'px',
      borderColor : this.props.color

    }
  }

  render() {
    return (
      <div className="col-md-12">
        <p className={`text-${this.props.color}`}>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>

        <div id="content" className={`text-${this.props.color}`} style={ this.setBorder() }>
          Content setting
        </div>
      </div>
    );
  }
}

export default Result;
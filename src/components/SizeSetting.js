import React, { Component } from 'react';

class SizeSetting extends Component {
  constructor(props){
    super(props);
    this.onDownSize = this.onDownSize.bind(this);
    this.onUpSize = this.onUpSize.bind(this);
  }

  onDownSize(down){
    this.props.onReceiveSize(down);
  } 

  onUpSize(up){
    this.props.onReceiveSize(up);
    
  } 


  render() {
    let elmDown,elmUp;

    if(this.props.size > 8 ){
       elmDown = parseInt(this.props.size) - 1;
    }else {
      elmDown = 8;
    }
    if(this.props.size < 36 ){
       elmUp = parseInt(this.props.size) + 1;
    }else {
      elmUp = 36;
    }

    return (
      <div className="card mb-3">
        <div className="card-header bg-warning text-white">
          Size : {this.props.size}px
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-success" onClick={ () => this.onDownSize(elmDown) }>Down</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={ () => this.onUpSize(elmUp) }>Up</button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
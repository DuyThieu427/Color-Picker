import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker.js';
import SizeSetting from './components/SizeSetting.js';
import Reset from './components/Reset.js';
import Result from './components/Result.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontSize : '16'
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetSize = this.onSetSize.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onSetColor(params) {
    this.setState({
      color : params
    });
  }

  onSetSize(s) {
    this.setState({
      fontSize : s
    });
  }

  onReset(reset){
    this.setState({
      color : 'red',
      fontSize : '16'
    });
  }

  render() {
    function numberGenerator(x) {

      let num = 1;

      function checkNumber(x) { 
        console.log(num + x);
      }

      num++;

      return checkNumber(x);
    }
    numberGenerator(2)
    // var number = numberGenerator();
    // number();
    // console.log(number);

    return (
      <div className="container mt-5">
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={ this.onSetColor }/>
            <div className="col-md-6">
              <SizeSetting size={this.state.fontSize} onReceiveSize={this.onSetSize}></SizeSetting>
              <Reset onReceiveReset={this.onReset}></Reset>
            </div>
            <Result color={this.state.color} fontSize={this.state.fontSize}></Result>
          </div>
      </div>
    );
  }
}

export default App;
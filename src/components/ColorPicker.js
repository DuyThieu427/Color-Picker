import React, { Component } from 'react';

class ColorPicker extends Component {

	constructor(props){
		super(props);
		this.state = {
			colors : ['red','green','blue','gray']
		};
	}

	showColor(color){
		return color;
	}

	setActiveColor(color) {
		this.props.onReceiveColor(color);
	}

  render() {

  	var elmColors = this.state.colors.map((color,index) => {
  		return 	<span 
  							key={index} 
  							className={`bg-${this.showColor(color)} 
  													${this.props.color === color ? 'active' : ''}` 	}
  							onClick={() => this.setActiveColor(color)}
  						></span>
  	});

    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-primary text-white">
            Color Picker
          </div>
          <div className="card-body">
          	{elmColors}
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
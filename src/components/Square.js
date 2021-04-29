import React from 'react';

export default class Square extends React.Component {

  
    
    render() {
      return (
        <button className="square"
         onClick={() =>
        this.props.onClick()}
        disabled={this.props.value == null ? false : true}>

          {this.props.value}
        </button>
      );
    }
  }
import '../../styling/button.css'
import React from 'react'

class HeaderButton extends React.Component {
 
  render() {
    return (
        <button 
          style={(this.props.called===this.props.text)? {backgroundColor: "#008CBA"} :{}}
          name={this.props.text} 
          onClick={this.props.action} >
            {this.props.text}
        </button>
    );
  }
}

export default HeaderButton;
import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log("Regular comp render")
    return (  
      <div>I am regular component {this.props.purename}</div>
    )
  }
}

export default RegularComp
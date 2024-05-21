import React, { Component } from 'react'

export class Classprops extends Component {
  render() {
    return (
      <div>
        <h3>Hello {this.props.learnername} from {this.props.place},Welcome to Simplilearn</h3>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Classprops
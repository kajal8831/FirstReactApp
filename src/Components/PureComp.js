import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Pure comp render")
    return (
      <div>I am pure component {this.props.purename}</div>
    )
  }
}

export default PureComp
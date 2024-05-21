//To get the base code structure by code snippet just type rce

import React, { Component } from 'react'

export class Click extends Component {
    //to get code base by snippet for constructor use rconst
 constructor(props) {
   super(props)
 
   this.state = {
      count : 0
   }
 }

 UpdateClick = () => {
    this.setState({count : this.state.count + 1});
 }

  render() {
    const {count} = this.state;
    return (
        <div>
            <button onClick={this.UpdateClick}>Clicked {count} times</button>
        </div>
      
    )
  }
}

export default Click
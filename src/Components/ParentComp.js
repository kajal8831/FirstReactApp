import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Simplilearn'
      }
    }

    componentDidMount(){
        setInterval(() => {
            //Here we are setting same value for name to check whether pure component re renders or not in case of same state and props
            this.setState({name : 'Simplilearn'})
        },3000)
    }

  render() {
    console.log("Parent comp render")
    return (
      <div>
        <p>I am Parent Component</p> 
        <PureComp purename={this.state.name}></PureComp>
        <RegularComp purename={this.state.name}></RegularComp>
      </div>
    )
  }
}

export default ParentComp
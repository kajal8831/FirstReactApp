import React, { Component } from 'react'
import subscribebell from './subscribebell.png'
import subscribedbell from './subscribedbell.png'

export class States extends Component {
  styles = {
    fontStyle : "bold",
    color:'teal'
  }
  constructor(props) {
    super(props)
  
    this.state = {
       message : "Subscribe to LearnX",
       sub : "Subscribe",
       imageURL : subscribebell
    }
  }

  ButtonChange = () => {
    this.setState({
        message : "Please hit the bell icon to never miss any updates",
        sub : "Subscribed"
    })
  }

  BellSubscribe = () => {
    this.setState({
        message : "Happy Learning",
        sub : "Subscribed",
        imageURL : subscribedbell
    })
  }

  render() {
    return (
      <div>
        <p style={this.styles}>Welcome</p>
        <p>{this.state.message}</p>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <br/>
        <img onClick={this.BellSubscribe} style={{height:"50px" , width:"50px"}} src={this.state.imageURL} alt=""/>
      </div>
    )
  }
}

export default States
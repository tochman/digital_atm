import React, { Component } from 'react'

class Balance extends Component {
  render() {
    return (
      <div>
        <h2 id="balance">Your balance: {this.props.balance}</h2>
      </div >
    )
  }
}

export default Balance

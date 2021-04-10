import React, { Component } from 'react'
import Balance from './components/Balance'
import './App.css';

class App extends Component {
  state = {
    balance: 1000,
    amount: 0,
    message: 'Greetings stranger. How may I be of service?'
  }

  transaction(type) {
    let newBalance, newMessage
    switch (type) {
      case "deposit":
        if (this.state.amount === 0) {
          newBalance = this.state.balance
          newMessage = `Come on! Quit playing around!`
        } else {
          newBalance = this.state.balance + this.state.amount
          newMessage = `Uh, what\'s that? ${this.state.amount}kr? Why, thank you!`
        }
        break
      case "withdraw":
        if (this.state.amount > this.state.balance) {
          newBalance = this.state.balance
          newMessage = `Ha! You don\'t have enough money! You\'re ${Math.abs(this.state.balance - this.state.amount)}kr short.`
        } else if (this.state.amount === 0) {
          newBalance = this.state.balance
          newMessage = `Come on! Quit playing around!`
        }
        else {
          newBalance = this.state.balance - this.state.amount
          newMessage = `Sure, take my money... Here\'s ${this.state.amount}kr.`
        }
        break
    }
    this.setState({ balance: newBalance, message: newMessage })
  }


  render() {
    return (
      <div className="frame">
        <div className="screen">
          <h3 id="message">{this.state.message}</h3>
          <input
            name="amount"
            type="number"
            placeholder="Amount..."
            onBlur={event => this.setState({ amount: Number(event.target.value) })}
          />
          <Balance balance={this.state.balance} />
        </div>
        <div className="buttons">
          <button id="withdraw-button"
            onClick={() => this.transaction('withdraw')}
          >Withdraw</button>
          <button id="deposit-button"
            onClick={() => this.transaction('deposit')}
          >Deposit</button>
        </div>
      </div>
    );
  }
}
export default App;

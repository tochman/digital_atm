import React, { Component } from 'react'
import Balance from './components/Balance'
import './App.css';

class App extends Component {
  state = {
    balance: 1000,
    amount: 0,
    message: 'Greetings stranger. How may I be of service?'
  }

  withdraw = () => {
    if (this.state.amount === 0) {
      this.setState({ message: "Come on, quit playing around!" })
    }
    else if (this.state.amount > this.state.balance) {
      let difference = this.state.amount - this.state.balance
      this.setState({ message: `Ha! You don't have enough money! You're ${difference}kr short.` })
    } else {
      let newBalance = this.state.balance - this.state.amount
      this.setState({ balance: newBalance })
      this.setState({ message: `Sure, take my money.. Here's ${this.state.amount}kr.` })
    }
  }

  deposit = () => {
    if (this.state.amount === 0) {
      this.setState({ message: "Come on, quit playing around!" })
    } else {
      let newBalance = this.state.balance + this.state.amount
      this.setState({ balance: newBalance })
      this.setState({ message: `Uh, what's that? ${this.state.amount}kr? Why, thank you!` })
    }
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
            onChange={(event) => this.setState({ amount: Number(event.target.value) })}
          />
          <Balance balance={this.state.balance} />
        </div>
        <div className="buttons">
          <button id="withdraw-button" onClick={() => this.withdraw()}>
            Withdraw
          </button>
          <button id="deposit-button" onClick={() => this.deposit()}>
            Deposit
          </button>
        </div>
      </div>
    );
  }
}
export default App;

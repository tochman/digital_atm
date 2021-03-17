import React from 'react'
import Balance from './components/Balance'
import './App.css';

class App extends React.Component {
  state = {
    balance: 1000,
    amount: '',
    message: 'Welcome to the digital ATM',
  }

  withdraw = () => {
    if (this.state.amount === 0 || this.state.amount === '') {
      this.setState({ message: "Come on, stop playing around." })
      this.setState({ amount: '' })
    }
    else if (this.state.balance >= this.state.amount) {
      this.setState({ balance: this.state.balance - this.state.amount })
      this.setState({ amount: '' })
      this.setState({ message: `Oh sure, take my money. Here's ${this.state.amount} kr` })
    } else {
      this.setState({ message: "You don't have enough money to withdraw that much! Ha!" })
    }
  }

  deposit = () => {
    if (this.state.amount === 0 || this.state.amount === '') {
      this.setState({ message: "Come on, stop playing around." })
      this.setState({ amount: '' })
    } else {
      this.setState({
        balance: this.state.balance + this.state.amount,
        amount: '',
        message: `Why, thank you for the ${this.state.amount} kr!`
      })
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="screen">
          <h3>{this.state.message}</h3>
          <input
            name="amount"
            type="number"
            placeholder="Amount..."
            value={this.state.amount}
            onChange={event => this.setState({ amount: Number(event.target.value) })}
          />
          <Balance balance={this.state.balance} />
        </div>
        <div className="buttons">
          <button onClick={() => this.withdraw()}>
            Withdraw
            </button>
          <button onClick={() => this.deposit()}>
            Deposit
            </button>
        </div>
      </div>
    );
  }
}
export default App;

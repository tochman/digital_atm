import React, { Component } from 'react'
import Balance from './components/Balance'
import './App.css';

class App extends Component {
  state = {
    balance: 1000,
    amount: 0
  }

  withdraw() {
    const newBalance = this.state.balance - this.state.amount
    this.setState({ balance: newBalance })
  }
  render() {
    return (
      <div className="frame">
        <div className="screen">
          <h3>Help! I'm broken.</h3>
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
            onClick={() => this.withdraw()}
          >Withdraw</button>
          <button>Deposit</button>
        </div>
      </div>
    );
  }
}
export default App;

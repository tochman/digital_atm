import React, { Component } from 'react'
import Balance from './components/Balance'
import './App.css';

class App extends Component {
  state = {
    balance: 1000
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
          />
          <Balance balance={this.state.balance}/>
        </div>
        <div className="buttons">
          <button>Withdraw</button>
          <button>Deposit</button>
        </div>
      </div>
    );
  }
}
export default App;

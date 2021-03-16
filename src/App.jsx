import React from 'react'
import Balance from './components/Balance'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="frame">
        <div className="screen">
          <h3>Thank you, please come again!</h3>
          <input
            name="amount"
            type="number"
            placeholder="Amount..."
          />
          <Balance />
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

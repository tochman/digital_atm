import React from 'react'

const Balance = (props) => {
  return (
    <div>
      <h2 data-cy="balance">Your account balance: {props.balance};-</h2>
    </div>
  )
}

export default Balance

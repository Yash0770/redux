import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { bindActionCreators } from 'redux';
import  {actionCreators} from '../src/state/index' 

const Shop = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={dispatch(actionCreators.withdrawMoney(100))}>-</button>
      Update balance
      <button className="btn btn-primary mx-2" onClick={dispatch(actionCreators.depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount,fetchApiData } from '../redux/accountSlice';

function Account() {
    const [value,setValue] = useState(0);
    const amountdata = useSelector((state) => state.account.amount);

    const dispatch = useDispatch();

  return (
    <>
    <div>
        <h4>
            <b>Account Component</b>
        </h4>
        <h3>Amount : ${amountdata}</h3>
        <button onClick={() =>dispatch(increment())}>increment +</button>
        <button onClick={() => dispatch(decrement())}>decrement -</button>
       <input type='text' onChange={(e) => setValue(e.target.value)}></input>
       <button onClick={() => dispatch(incrementByAmount(value))}> increment by: {value}+</button> 
       <button onClick={() => dispatch(fetchApiData(1))}> get Api data</button> 

    </div>
    </>
  );
};

export default Account;
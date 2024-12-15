import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/bonusSlice';

function Bonus() {
    const bonusdata = useSelector((state) => state.bonus.points);

    const dispatch = useDispatch();

  return (
    <>
    <h1>bonus component</h1>
    <p>total points : {bonusdata}</p>
    <button onClick={() =>dispatch(increment())}>increment +</button>
    </>
  );
};

export default Bonus;
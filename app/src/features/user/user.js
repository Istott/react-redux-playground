import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function User() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
        <p>im a user</p>
    </div>
  );
}
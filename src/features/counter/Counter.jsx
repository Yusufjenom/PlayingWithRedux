import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, zero, addByInput} from '../counter/counterSlice';

function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(zero())}>Reset</button>
            <input onChange={(e) => setNum(e.target.value)} type="text" />
            <button onClick={() => dispatch(addByInput(Number(num)))}>add by Input</button>
        </div>
    </section>
  )
}

export default Counter
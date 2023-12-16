import React, { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/rootSlice'
import { ICount } from '../../redux/rootSlice';
import axios from "axios";

const Home = (): ReactElement => {
  const count = useSelector((state: ICount) => state.value);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const res = await axios.get('/data')
      console.log(res);
      

    })()
  }, [])
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;

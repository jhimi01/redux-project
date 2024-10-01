import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increatment,
  increatmentByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increatmentByValue(5))}>
        Increment By Value
      </button> 
      <br />
      <button onClick={() => dispatch(increatment())}>Increment</button>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

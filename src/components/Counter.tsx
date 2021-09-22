import { useState } from "react";

export const Counter = () => {
  //хук useStateиспользуется для управления состоянием
  const [count, setCount] = useState(0);

  const inrement = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Functional Counter</h2>
      <h2>{count}</h2>
      <button onClick={inrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

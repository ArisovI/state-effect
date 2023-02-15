import React from "react";

const Calc = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter * 2)}>x 2</button>
      <button onClick={() => setCounter(counter / 2)}>/ 2</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Calc;

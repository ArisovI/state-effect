import React from "react";
import "../style.css";
const Math = () => {
  const [count, setCount] = React.useState(0);
  const span = React.useRef();

  function plus() {
    setCount(count + 1);
    span.current.style.color = "red";
    setTimeout(() => {
      span.current.style.color = "black";
    }, 2000);
  }

  function minus() {
    setCount(count - 1);
    span.current.style.color = "green";
    setTimeout(() => {
      span.current.style.color = "black";
    }, 2000);
  }
  return (
    <div className="math">
      <button onClick={plus}>+</button>
      <span ref={span}>{count}</span>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Math;

import React from "react";
import "../style.css";
const Math = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="math">
      <button onClick={() => setCount(count + 1)}>+</button>
      <span style={{ color: count > 0 ? "red" : "green" }}> {count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Math;

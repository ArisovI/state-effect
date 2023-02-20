import React from "react";
import "../style.css";
import pi from "./icon/pizza.jpg";
import pi2 from "./icon/pizza-02.jpg";
import pi3 from "./icon/pizza-03.jpg";
import pi4 from "./icon/pizza-04.jpg";
const Pizza = () => {
  const [num, setNum] = React.useState(pi);
  const ins = React.useRef();
  function fan(e) {
    console.log(Math.floor(ins.current.scrollTop));
  }

  return (
    <div className="pizza">
      <div className="pizza-title">
        <h1>
          Hello
          <img className="pizza-img" src={num} />
          comes in!
        </h1>
      </div>
      <div ref={ins} onScroll={fan} className="pizza-content">
        <ul>
          <li>
            <img src={pi} alt="" />
          </li>
          <li>
            <img src={pi2} alt="" />
          </li>

          <li>
            <img src={pi3} alt="" />
          </li>

          <li>
            <img src={pi4} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pizza;

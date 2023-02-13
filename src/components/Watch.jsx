import React from "react";

const Watch = () => {
  const [second, setSecond] = React.useState(1);

  React.useEffect(() => {
    setInterval(() => {
      setSecond(second + 1);
    }, 2000);
  }, [second]);
  return (
    <div className="watch">
      <div className="clock">
        <li className="first">12</li>
        <li className="second">3</li>
        <li className="third">6</li>
        <li className="fourth">9</li>
        <div
          style={{ transform: `rotate(${second}deg)`, transformOrigin: "0.0" }}
          className="line"
        ></div>
      </div>
    </div>
  );
};

export default Watch;

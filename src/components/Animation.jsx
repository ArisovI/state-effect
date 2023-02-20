import React from "react";
import "../style.css";
const Animation = () => {
  const [anim, setAnim] = React.useState(false);
  return (
    <div className="animation">
      <button onClick={() => setAnim(!anim)} className="animation-btn">
        Toggle
      </button>

      <div className={anim ? "first-window" : "first-w"}></div>
      {/* <div className={anim ? "second-window" : "first-w"}></div> */}
      {/* <div className={anim ? "third-window" : "first-w"}></div> */}
    </div>
  );
};

export default Animation;

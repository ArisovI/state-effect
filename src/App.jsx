import React from "react";
import Comments from "./components/Comments";
import RandomPicture from "./components/RandomPicture";
import Watch from "./components/Watch";
import "./style.css";

const App = () => {
  const [active, setActive] = React.useState(1);
  const toggle = (i) => {
    setActive(i);
  };
  return (
    <div className="container">
      <div className="tabs">
        <div
          onClick={() => toggle(1)}
          className={active === 1 ? "tab tab-active" : "tab"}
        >
          1
        </div>
        <div
          onClick={() => toggle(2)}
          className={active === 2 ? "tab tab-active" : "tab"}
        >
          2
        </div>
        <div
          onClick={() => toggle(3)}
          className={active === 3 ? "tab tab-active" : "tab"}
        >
          3
        </div>
      </div>
      <div className="contents">
        <div className={active === 1 ? "content active-content" : "content"}>
          <RandomPicture />
        </div>

        <div className={active === 2 ? "content active-content" : "content"}>
          <Comments />
        </div>

        <div className={active === 3 ? "content active-content" : "content"}>
          <Watch />
        </div>
      </div>
    </div>
  );
};

export default App;

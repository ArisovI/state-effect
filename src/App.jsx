import React from "react";
import Calc from "./components/Calc";
import Comments from "./components/Comments";
import Math from "./components/Math";
import RandomPicture from "./components/RandomPicture";
import Select from "./components/Select";
import ShowDiolog from "./components/ShowDiolog";
import ShowHide from "./components/ShowHide";
import SpecialBtn from "./components/SpecialBtn";
import Watch from "./components/Watch";
import YourName from "./components/YourName";
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

        <div
          onClick={() => toggle(4)}
          className={active === 4 ? "tab tab-active" : "tab"}
        >
          4
        </div>
        <div
          onClick={() => toggle(5)}
          className={active === 5 ? "tab tab-active" : "tab"}
        >
          5
        </div>

        <div
          onClick={() => toggle(6)}
          className={active === 6 ? "tab tab-active" : "tab"}
        >
          6
        </div>

        <div
          onClick={() => toggle(7)}
          className={active === 7 ? "tab tab-active" : "tab"}
        >
          7
        </div>

        <div
          onClick={() => toggle(8)}
          className={active === 8 ? "tab tab-active" : "tab"}
        >
          8
        </div>

        <div
          onClick={() => toggle(9)}
          className={active === 9 ? "tab tab-active" : "tab"}
        >
          9
        </div>

        <div
          onClick={() => toggle(10)}
          className={active === 10 ? "tab tab-active" : "tab"}
        >
          10
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

        <div className={active === 4 ? "content active-content" : "content"}>
          <Math />
        </div>

        <div className={active === 5 ? "content active-content" : "content"}>
          <Calc />
        </div>

        <div className={active === 6 ? "content active-content" : "content"}>
          <ShowHide />
        </div>

        <div className={active === 7 ? "content active-content" : "content"}>
          <SpecialBtn />
        </div>
        <div className={active === 8 ? "content active-content" : "content"}>
          <Select />
        </div>

        <div className={active === 9 ? "content active-content" : "content"}>
          <ShowDiolog />
        </div>

        <div className={active === 10 ? "content active-content" : "content"}>
          <YourName />
        </div>
      </div>
    </div>
  );
};

export default App;

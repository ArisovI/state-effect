import React from "react";

const SpecialBtn = () => {
  const [count, setCount] = React.useState(0);
  const [info, setInfo] = React.useState([
    { text: "1 Далеко-далеко за словесными горами в стране.", id: 0 },
    {
      text: "2 Далеко-далеко за словесными горами в стране.",
      id: 1,
    },
    {
      text: "3 Далеко-далеко за словесными горами в стране.",
      id: 2,
    },
  ]);

  function btn() {
    const res = info.map((el, index) => {
      if (el.id == count) {
        return {
          ...el,
          text: "Anything",
        };
      }
      return el;
    });
    setInfo(res);
    setCount(count + 1);
  }

  return (
    <div className="special">
      {info.map((e, i) => {
        return <p key={i}>{e.text}</p>;
      })}
      <button onClick={btn}>Special Button</button>
    </div>
  );
};

export default SpecialBtn;

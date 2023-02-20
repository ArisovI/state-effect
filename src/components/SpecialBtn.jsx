import React from "react";

const SpecialBtn = () => {
  const [info, setInfo] = React.useState([
    { text: "1 Далеко-далеко за словесными горами в стране." },
    {
      text: "2 Далеко-далеко за словесными горами в стране.",
    },
    {
      text: "3 Далеко-далеко за словесными горами в стране.",
    },
  ]);

  function btn() {
    // setInfo(info.splice(1, 2));
    setInfo([...info, {text: 'asdasdd'}])
  }

  function back(){
    
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

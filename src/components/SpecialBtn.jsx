import React from "react";

const SpecialBtn = () => {
  const [info, setInfo] = React.useState([
    "1 Далеко-далеко за словесными горами в стране.",
    "2 Далеко-далеко за словесными горами в стране.",
    "3 Далеко-далеко за словесными горами в стране.",
  ]);

  function btn() {
    setInfo(info.splice(1, 2));
  }

  return (
    <div className="special">
      <p>{info[0]}</p>
      <p>{info[1]}</p>
      <p>{info[2]}</p>
      <button onClick={btn}>Special Button</button>
    </div>
  );
};

export default SpecialBtn;

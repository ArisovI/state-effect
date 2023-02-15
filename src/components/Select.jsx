import React from "react";

const Select = () => {
  const [text, setText] = React.useState("Нукус");
  function stack(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Selected {text} </h1>
      <select onChange={(e) => stack(e)} name="" id="">
        <option value="Нукус">Нукус</option>
        <option value="Бухара">Бухара</option>
        <option value="Ташкент">Ташкент</option>
      </select>
    </div>
  );
};

export default Select;

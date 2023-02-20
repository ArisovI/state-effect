import React from "react";

const ShowHide = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="btns">
        <button onClick={() => setVisible(true)}>Show</button>
        <button onClick={() => setVisible(false)}>Hide</button>
      </div>

      <div className={visible ? "info" : "info-visible"}>
        <p>An input field!</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default ShowHide;

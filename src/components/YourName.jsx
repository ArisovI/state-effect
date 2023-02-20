import React from "react";

const YourName = () => {
  const [title, setTitle] = React.useState("");
  const myRef = React.useRef();
  function click() {
    if (myRef.current.value != "") {
      setTitle(myRef.current.value);
    }
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <h2>Hellow : {title}</h2>
      <span>Update Your Name</span>
      <input type="text" ref={myRef} />
      <button onClick={click}>Save</button>
    </div>
  );
};

export default YourName;

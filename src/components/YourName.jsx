import React from "react";

const YourName = () => {
  const [name, setName] = React.useState("");
  let a;
  function change(event) {
    a = event.target.value;
    setName("");
  }

  function save() {
    setName(a);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <h2>Hellow {name}</h2>
      <span>Update Your Name</span>
      <input type="text" onChange={change} />
      <button onClick={save}>Save</button>
    </div>
  );
};

export default YourName;

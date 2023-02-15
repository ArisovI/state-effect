import React from "react";

const ShowDiolog = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Diolog</button>
      {show ? (
        <div className="diolog">
          <h3>Diolog title</h3>
          <h3>Diolog body</h3>
          <span onClick={() => setShow(false)} style={{ background: "white" }}>
            Exit
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowDiolog;

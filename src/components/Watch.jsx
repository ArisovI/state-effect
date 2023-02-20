import React from "react";

const Watch = () => {
  const [second, setSecond] = React.useState([1]);

  // React.useLayoutEffect(() => {
  //   setInterval(() => {
  //     setSecond([...prev, prev + 1]);
  //   }, 1000);
  // }, [second]);
  return (
    <div className="watch">
      <div className="clock">
        <li className="first">12</li>
        <li className="second">3</li>
        <li className="third">6</li>
        <li className="fourth">9</li>
        <div
          style={{ transform: `rotate(${second}deg)` }}
          className="line"
        ></div>
      </div>
    </div>
  );
};

export default Watch;
// import React from 'react'

// const Watch = () => {
//   return (
//     <div>
//       asd
//     </div>
//   )
// }

// export default Watch

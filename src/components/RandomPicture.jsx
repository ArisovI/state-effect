import React, { useState, useEffect } from "react";

const RandomPicture = () => {
  const [view, setView] = useState([]);

  useEffect(async () => {
    await fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((result) => {
        let person = {
          name: result.results[0].name.first,
          picture: result.results[0].picture.large,
        };
        setView([...view, person]);
      });
  }, []);

  return (
    <div>
      {view.length ? (
        view.map((el, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Name : {el.name}</p>
            <img src={el.picture} alt="User Picture" />
          </div>
        ))
      ) : (
        <div className="loading">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomPicture;

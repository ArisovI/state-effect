import React from "react";
import "../style.css";
import travel1 from "./icon/01.jpg";
import travel2 from "./icon/02.jpg";
import travel3 from "./icon/03.jpg";
const Travel = () => {
  const [countries, setCountries] = React.useState([
    {
      country: "Moscow",
      completed: false,
      id: 1,
      picture: travel1,
    },
    {
      country: "Saint-Petersburg",
      completed: false,
      id: 2,
      picture: travel2,
    },
    {
      country: "Tashkent",
      completed: false,
      id: 3,
      picture: travel3,
    },
  ]);
  const [visible, setVisible] = React.useState(false);
  // const [box, setBox] = React.useState([]);
  function add(el) {
    // countries.map((item) => {
    //   if (item.completed == true) {
    //     setBox([...box, item]);
    //     console.log(box);
    //   } else return;
    // });

    countries.map((item) => {
      if (item == el) {
        item.completed = !item.completed;
      }
      setCountries([...countries]);
    });

    // countries.map((item) => {
    //   if (item.completed === true) {
    //     return setBox([...box, item]);
    //   }
    // });

    // setBox([...box, el]);
  }

  function reset() {
    countries.map((item) => {
      if (item.completed == true) {
        item.completed = false;
      } else if (item.completed == false) {
        item.completed = true;
      }
      setCountries([...countries]);
    });
  }

  return (
    <div className="travel">
      <div className="travel-top">
        <h2>Select a travel</h2>
        <div className="travel-top__btn">
          <button onClick={() => setVisible(true)}>Submit</button>
          <button onClick={() => reset()}>Toggle All</button>
        </div>
      </div>
      <div className="travel-bottom">
        {countries.map((el, index) => (
          <div
            style={{ border: el.completed ? " 3px solid blue" : "" }}
            key={index}
            onClick={() => add(el)}
            className="travel-bottom__item"
          >
            <img src={el.picture} alt="" />
            <span className="travel-bottom__item_info">{el.country}</span>
          </div>
        ))}
      </div>
      {visible ? (
        <div className="box">
          <div className="box-top">
            <h2>Selected travels</h2>
            <span onClick={() => setVisible(false)}>Back</span>
          </div>
          <div className="box-content">
            {countries.map((el, index) => {
              if (el.completed === true) {
                return (
                  <div
                    style={{ display: el.completed ? "" : "none" }}
                    key={index}
                    className="box-content__item"
                  >
                    <img src={el.picture} alt="" />
                    <span>{el.country}</span>
                  </div>
                );
              } else if (el.completed === false) return;
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Travel;

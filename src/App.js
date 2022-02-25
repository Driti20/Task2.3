import "./App.css";
import React, { useState } from "react";
import Img from "./Image/img.PNG";

function App() {
  const [hide, setHide] = useState(true);

  const hider = () => {
    setHide((prev) => !prev);
  };
  const [hide2, setHide2] = useState(true);

  const hider2 = () => {
    setHide2((prev) => !prev);
  };
  const [hide3, setHide3] = useState(true);

  const hider3 = () => {
    setHide3((prev) => !prev);
  };
  const [hide4, setHide4] = useState(true);

  const hider4 = () => {
    setHide4((prev) => !prev);
  };
  const [hide5, setHide5] = useState(true);

  const hider5 = () => {
    setHide5((prev) => !prev);
  };
  return (
    <div className="App">
      {hide ? (
        <>
          <div className="cards" onClick={hider}>
            <div className="card">
              <div className="image">
                <img src={Img} alt="Images" />
              </div>
              <div className="title">
                <h2>About us</h2>
                <p>4 articles in this Topic</p>
              </div>
            </div>
            <div className="openArrow"></div>
          </div>
        </>
      ) : (
        <>
          <div className="cards" onClick={hider}>
            <div className="card">
              <div className="Images">
                <img src={Img} alt="Images" />
              </div>
              <div className="title">
                <h2>About us</h2>
                <p>4 articles in this Topic</p>
              </div>
            </div>
            <div className="closeArrow2"></div>
          </div>
          <div className="cards2">
            {hide2 ? (
              <div className="card2" onClick={hider2}>
                <div className="question">
                  How does Parkname seperate itself from other domain name
                  parking companies?
                </div>
                <div className="rightArrow"></div>
              </div>
            ) : (
              <>
                <div className="card2" onClick={hider2}>
                  <div className="question">
                    How does Parkname seperate itself from other domain name
                    parking companies?
                  </div>
                  <div className="closeArrow"></div>
                </div>
                <div className="answer">
                  <p>
                    Your domain are a vauable online proprety. As in any
                    invesrment, you want the most efficient, easy way to make
                    sure your property is going to be profitable. do you own
                    more than 1,000 domains? As a profesional domainer, you will
                    find everythink you need through Parkname To generate
                    maximum profits from your domain portfolio.
                  </p>
                </div>
              </>
            )}
            {hide3 ? (
              <div className="card3" onClick={hider3}>
                <div className="question">
                  Is Parkname Parking actualy free ?
                </div>
                <div className="rightArrow"></div>
              </div>
            ) : (
              <>
                <div className="card3" onClick={hider3}>
                  <div className="question">
                    Is Parkname Parking actualy free ?
                  </div>
                  <div className="closeArrow"></div>
                </div>
                <div className="answer">
                  <p>
                    Your domain are a vauable online proprety. As in any
                    invesrment, you want the most efficient, easy way to make
                    sure your property is going to be profitable. do you own
                    more than 1,000 domains? As a profesional domainer, you will
                    find everythink you need through Parkname To generate
                    maximum profits from your domain portfolio.
                  </p>
                </div>
              </>
            )}
            {hide4 ? (
              <div className="card4" onClick={hider4}>
                <div className="question">What you do ?</div>
                <div className="rightArrow"></div>
              </div>
            ) : (
              <>
                <div className="card4" onClick={hider4}>
                  <div className="question">What you do ?</div>
                  <div className="closeArrow"></div>
                </div>
                <div className="answer">
                  <p>
                    Your domain are a vauable online proprety. As in any
                    invesrment, you want the most efficient, easy way to make
                    sure your property is going to be profitable. do you own
                    more than 1,000 domains? As a profesional domainer, you will
                    find everythink you need through Parkname To generate
                    maximum profits from your domain portfolio.
                  </p>
                </div>
              </>
            )}
            {hide5 ? (
              <div className="card5" onClick={hider5}>
                <div className="question">Where was Pakname first founded</div>
                <div className="rightArrow"></div>
              </div>
            ) : (
              <>
                <div className="card5" onClick={hider5}>
                  <div className="question">
                    Where was Pakname first founded
                  </div>
                  <div className="closeArrow"></div>
                </div>
                <div className="answer">
                  <p>
                    Your domain are a vauable online proprety. As in any
                    invesrment, you want the most efficient, easy way to make
                    sure your property is going to be profitable. do you own
                    more than 1,000 domains? As a profesional domainer, you will
                    find everythink you need through Parkname To generate
                    maximum profits from your domain portfolio.
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    if (card.length !== 0) {
      localStorage.setItem("arr", card);
    }
  }, [card]);

  useEffect(() => {
    const str = localStorage.getItem("arr");
    if (str) {
      const arr = str.split(",");
      const newArr = arr.map((item) => +item);
      setCard(newArr);
    }
  }, []);

  function MathRandom() {
    const randomNumber = Math.floor(Math.random() * 100);
    setCard([...card, randomNumber]);
  }

  function sortFunc() {
    let arrSort = JSON.parse(JSON.stringify(card));
    arrSort.sort((a, b) => a - b);
    setCard(arrSort);
    console.log(arrSort);
  }

  function remove(index) {
    const removeCard = card.filter((el, n) => index !== n);
    setCard(removeCard);
  }

  return (
    <div className="global-div">
      <div className="header-div">
        <div className="buttons">
          <button className="add-button" onClick={MathRandom}>
            ADD CARD
          </button>
          <button onClick={sortFunc}>SORT CARD</button>
        </div>
        <div className="line"></div>
        <div className="cards-parent">
          <div className="cards">
            {card.map((el, index) => {
              return (
                <div className="cards-div" key={index}>
                  <button onClick={() => remove(index)}>X</button>
                  <p>{el}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer">
          <p>footer</p>
        </div>
      </div>
      <div className="right-right"></div>
      <div className="right-side-text-div">
        <p className="right-side-text">
          Press the "add card" button to add the new Card Use the "sort cards"
          button to sort the Cards by the lnerease. Press an X lcon on the top
          right to delete them.
        </p>
      </div>
    </div>
  );
};

export default Cards;

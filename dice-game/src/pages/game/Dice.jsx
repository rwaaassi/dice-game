import React, { useState } from "react";
import dice from "../../data";

const Dice = () => {
  const [diceImages, setDiceImages] = useState({
    dice1: dice[0],
    dice2: dice[1],
  });

  const getRandomImg = () => {
    return dice[Math.floor(Math.random() * dice.length)];
  };

  const rollDice = () => {
    let randomDice1 = getRandomImg();
    let randomDice2 = getRandomImg();

    while (randomDice2 === randomDice1) {
      randomDice2 = getRandomImg();
    }

    setDiceImages({ dice1: randomDice1, dice2: randomDice2 });
  };

  return (
    <>
      <div>
        <img src={diceImages.dice1} alt="Dice 1" />
        <img src={diceImages.dice2} alt="Dice 2" />
      </div>
      <button type="button" onClick={rollDice}>
        Roll Dice
      </button>
      <button type="button" onClick={k}></button>
    </>
  );
};

export default Dice;

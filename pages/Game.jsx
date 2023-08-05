import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SingleCard from "./components/SingleCard";

export default function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const cardImages = [
    { src: "/Game_Image/Game_Nezuko.png", matched: false },
    { src: "/Game_Image/Game_Luffy.png", matched: false },
    { src: "/Game_Image/Game_Conan.png", matched: false },
    { src: "/Game_Image/Game_Ichigo.png", matched: false },
    { src: "/Game_Image/Game_Goku.png", matched: false },
    { src: "/Game_Image/Game_Kurama.png", matched: false },
  ];

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    if (card.id === choiceOne?.id) {
      return;
    }

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    // setTurns(prevTurns => prevTurns + 1 )
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="min-h-screen">
      <Header
        name="Game"
        title="Have fun and enjoy the game"
        image="/Header_Image/Game_Header.jpg"
      />
      <div className=" my-[2.5rem]   ">
        <h1 className=" text-amber-custom text-[5rem] md:text-[2.125rem] text-center">
          Match Game
        </h1>

        <div className=" flex justify-center mt-[2.5rem] ">
          <button
            className="button text-[2.125rem] sm:text-[1rem] md:text-[1.5rem]"
            onClick={shuffleCards}
          >
            New Game
          </button>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div className="mx-[1rem] my-[2.5rem] grid grid-cols-[1fr_1fr_1fr_1fr] gap-[3rem]">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

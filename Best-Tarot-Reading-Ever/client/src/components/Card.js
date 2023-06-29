import React, { useEffect } from "react";
import useCard from "../hooks/useCard";

function Card({
  card,
  position,
  onCardSelection,
  onCardDeselection,
  isSelectingCards,
}) {
  const { isRevealed, setIsRevealed, isSelected, toggleIsSelected } = useCard(
    card,
    onCardSelection,
    onCardDeselection,
    isSelectingCards
  );

  // Used for development purposes
  let symbol = "";

  switch (card.suit) {
    case "hearts": {
      symbol = "♥";
      break;
    }
    case "diamonds": {
      symbol = "♦";
      break;
    }
    case "spades": {
      symbol = "♠";
      break;
    }
    case "clubs": {
      symbol = "♣";
      break;
    }
    default:
      symbol = "?";
  }

  const cardClass = `card 
    ${isRevealed ? null : "card-back"} 
    ${isSelected ? "card-selected" : null}`;

  return (
    <div className={cardClass} onClick={toggleIsSelected}>
      <p>{isRevealed ? `${symbol} ${card.value}` : null}</p>
    </div>
  );
}

export default Card;

import { useEffect, useState } from "react";
import useDeck from "./useDeck";

function useCard(card, onCardSelection, onCardDeselection, isSelectingCards) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsRevealed(!isSelectingCards);
  });

  const onCardSelectedClick = () => {
    onCardSelection(card);
  };

  const onCardDeselectedClick = () => {
    onCardDeselection(card);
  };

  // Toggles whether the card is facing up or down
  const toggleIsRevealed = () => {
    setIsRevealed((isFlipped) => !isFlipped);
  };

  const toggleIsSelected = () => {
    isSelected ? onCardDeselectedClick(card) : onCardSelectedClick(card);
    setIsSelected((isSelected) => !isSelected);
  };

  // "Turns" the card up if not already facing up
  const revealCard = () => {
    if (!isRevealed) {
      setIsRevealed(true);
    }
  };

  // "Turns" the card down if not already facing down
  const faceDownCard = () => {
    if (isRevealed) {
      setIsRevealed(false);
    }
  };

  return {
    isRevealed,
    setIsRevealed,
    isSelected,
    setIsSelected,
    toggleIsRevealed,
    toggleIsSelected,
    revealCard,
    faceDownCard,
  };
}

export default useCard;

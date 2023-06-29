import React from "react";
import useDeck from "../hooks/useDeck";
import useTarot from "../hooks/useTarot";
import "../styles/cards.css";
import CardSelectionContainer from "./CardSelectionContainer";
import ReadingResultsContainer from "./ReadingResultsContainer";
import useCard from "../hooks/useCard";

function TarotContainer() {
  const {
    deck,
    prepareNewDeck,
    deleteAllUnselectedCards,
    addSelectedCard,
    removeSelectedCard,
  } = useDeck();

  const { isSelectingCards, handleSelectionSubmit, handleTarotReset } =
    useTarot(deck, deleteAllUnselectedCards, prepareNewDeck);

  // This function is just a placeholder
  // Will be replaced with callback to handle rendering of clicked cards
  const doNothing = () => {};

  return (
    <div>
      {isSelectingCards ? (
        <CardSelectionContainer
          deck={deck}
          onCardSelection={addSelectedCard}
          onCardDeselection={removeSelectedCard}
          onReset={handleTarotReset}
          onSubmit={handleSelectionSubmit}
          isSelectingCards={isSelectingCards}
        />
      ) : (
        <ReadingResultsContainer
          deck={deck}
          onReset={handleTarotReset}
          onCardSelection={doNothing}
          onCardDeselection={doNothing}
          isSelectingCards={isSelectingCards}
        />
      )}
    </div>
  );
}

export default TarotContainer;

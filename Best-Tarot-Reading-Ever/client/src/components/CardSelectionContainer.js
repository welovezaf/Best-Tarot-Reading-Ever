import React from "react";
import Deck from "./Deck";

function CardSelectionContainer({
  deck,
  onCardSelection,
  onCardDeselection,
  onReset,
  onSubmit,
  isSelectingCards,
}) {
  return (
    <div>
      <Deck
        deck={deck}
        onCardSelection={onCardSelection}
        onCardDeselection={onCardDeselection}
        isSelectingCards={isSelectingCards}
      />
      <button className="action-btn" onClick={onReset}>
        Reset
      </button>
      <button className="action-btn" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CardSelectionContainer;

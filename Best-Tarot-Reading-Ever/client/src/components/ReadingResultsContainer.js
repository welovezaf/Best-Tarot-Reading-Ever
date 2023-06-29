import React from "react";
import CardRow from "./CardRow";

function ReadingResultsContainer({
  deck,
  onReset,
  onCardSelection,
  onCardDeselection,
  isSelectingCards,
}) {
  return (
    <div>
      <CardRow
        deck={deck}
        onCardSelection={onCardSelection}
        onCardDeselection={onCardDeselection}
        isSelectingCards={isSelectingCards}
      />
      <button className="action-btn" onClick={onReset}>
        New Reading
      </button>
    </div>
  );
}

export default ReadingResultsContainer;

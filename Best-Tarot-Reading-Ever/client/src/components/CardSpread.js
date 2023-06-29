import React from "react";
import Card from "./Card";

function CardSpread({
  spread,
  onCardSelection,
  onCardDeselection,
  isSelectingCards,
}) {
  if (!spread) {
    return null;
  }

  return (
    <div className="card-spread">
      {spread.map((card, i) => (
        <Card
          key={i}
          card={card}
          position={i / spread.length}
          onCardSelection={onCardSelection}
          onCardDeselection={onCardDeselection}
          isSelectingCards={isSelectingCards}
        />
      ))}
    </div>
  );
}

export default CardSpread;

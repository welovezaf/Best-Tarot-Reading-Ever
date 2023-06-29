import React from "react";
import Card from "./Card";

function CardRow({
  deck,
  onCardSelection,
  onCardDeselection,
  isSelectingCards,
}) {
  return (
    <div className="card-row">
      {deck[0].map((card) => (
        <Card
          card={card}
          onCardSelection={onCardSelection}
          onCardDeselection={onCardDeselection}
          isSelectingCards={isSelectingCards}
        />
      ))}
    </div>
  );
}

export default CardRow;

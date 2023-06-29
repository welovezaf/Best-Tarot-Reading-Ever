import React, { useState } from "react";
import useDeck from "../hooks/useDeck";
import CardSpread from "./CardSpread";

function Deck({ deck, onCardSelection, onCardDeselection, isSelectingCards }) {
  const [spreads, setSpreads] = useState([[]]);

  if (!deck) {
    return null;
  }

  return (
    <div className="deck">
      {deck.map((spread, i) => (
        <CardSpread
          key={i}
          spread={spread}
          onCardSelection={onCardSelection}
          onCardDeselection={onCardDeselection}
          isSelectingCards={isSelectingCards}
        />
      ))}
    </div>
  );
}

export default Deck;

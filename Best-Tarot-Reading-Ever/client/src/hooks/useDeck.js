import { useEffect, useState } from "react";

function useDeck() {
  const [deck, setDeck] = useState([[]]);
  const [selectedCards, setSelectedCards] = useState([]);
  const MAX_SPREAD_SIZE = 39;

  useEffect(() => {
    prepareNewDeck();
  }, []);

  // Fetches all cards from the backend API
  const fetchDeck = () => {
    fetch("/cards").then((resp) => {
      if (resp.ok) {
        resp.json().then((deckData) => {
          let newDeck = deckData.cards;
          shuffleDeck(newDeck);
          newDeck = splitDeckByNumStacks(newDeck);
          // newDeck = splitDeckByStackSize(newDeck, MAX_SPREAD_SIZE);
          setDeck(newDeck);
        });
      } else {
        resp.json().then((errorData) => {
          console.log(errorData);
          setDeck([[]]);
        });
      }
    });
  };

  // Fetches one card at a given index from the backend API
  const fetchCard = (index) => {
    fetch(`/cards/${index}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((cardData) => {
          console.log(cardData);
          setSelectedCards([...selectedCards, cardData]);
        });
      } else {
        resp.json().then((errorData) => console.log(errorData));
      }
    });
  };

  const prepareNewDeck = () => {
    fetchDeck();
    setSelectedCards([]);
  };

  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let tmp = deck[i];
      deck[i] = deck[j];
      deck[j] = tmp;
    }

    return deck;
  };

  const splitDeckByNumStacks = (deck, numStacks = 2) => {
    const splitDeck = [];
    for (let i = 0; i < numStacks; i++) splitDeck.push([]);

    deck.map((element, i) => {
      const subArr = splitDeck[i % numStacks];
      subArr.push(element);
    });

    return splitDeck;
  };

  const splitDeckByStackSize = (deck, stackSize = 1) => {
    if (deck.length <= stackSize) {
      return [[...deck]];
    }

    const splitDeck = [];
    for (let i = 0; i < Math.ceil(deck.length / stackSize); i++)
      splitDeck.push([]);

    deck.map((element, i) => {
      const subArr = splitDeck[Math.floor(i / stackSize)];
      subArr.push(element);
    });

    return splitDeck;
  };

  const mergeDeck = (deck) => {
    const mergedDeck = [];
    deck.map((spread) => spread.map((card) => mergedDeck.push(card)));

    return mergedDeck;
  };

  const addSelectedCard = (addedCard) => {
    setSelectedCards([...selectedCards, addedCard]);
  };

  const removeSelectedCard = (removedCard) => {
    const filteredSelectedCards = selectedCards.filter(
      (card) => card !== removedCard
    );
    setSelectedCards(filteredSelectedCards);
  };

  const deleteAllUnselectedCards = () => {
    const remainingDeck = deck.map((spread) =>
      spread.filter((card) => selectedCards.includes(card))
    );
    const mergedDeck = mergeDeck(remainingDeck);
    console.log(mergedDeck);
    setDeck([mergedDeck]);

    const arr = [];
  };

  return {
    deck,
    selectedCards,
    setDeck,
    prepareNewDeck,
    shuffleDeck,
    splitDeckByNumStacks,
    splitDeckByStackSize,
    addSelectedCard,
    removeSelectedCard,
    deleteAllUnselectedCards,
  };
}

export default useDeck;

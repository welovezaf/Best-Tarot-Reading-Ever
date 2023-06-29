import { useEffect, useState } from "react";

function useTarot(deck, onSubmitCallback, onResetCallback) {
  const [isSelectingCards, setIsSelectingCards] = useState(true);
  const [score, setScore] = useState(0);
  const [reading, setReading] = useState("");

  useEffect(() => {}, []);

  const handleSelectionSubmit = () => {
    onSubmitCallback();
    setIsSelectingCards(false);
  };

  const handleTarotReset = () => {
    onResetCallback();
    setIsSelectingCards(true);
  };

  return {
    isSelectingCards,
    score,
    reading,
    handleSelectionSubmit,
    handleTarotReset,
  };
}

export default useTarot;

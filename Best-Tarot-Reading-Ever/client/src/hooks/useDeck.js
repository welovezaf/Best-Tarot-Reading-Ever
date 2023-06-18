import { useEffect, useState } from "react";

function useDeck() {
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        fetch("/cards")
        .then(resp => {
            if (resp.ok) {
                resp.json().then(deckData => {
                    console.log(deckData);
                    setDeck(deckData);
                })
            } else {
                resp.json().then(errorData => console.log(errorData));
            }
        })
    }, []);

    return { deck, setDeck };
}

export default useDeck;
import { useEffect, useState } from "react";
import Card from "./Card";
import "./Deck.css"

function Deck() {

    // const BASE_DECK_ID = "9mhu93ygxb2b";

    const [deckId, setDeckId] = useState("");
    const [cards, setCards] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);
    const [remainingCards, setRemainingCards] = useState(52);


    useEffect(
        () => {
            async function fetchDeckId() {
                const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
                const data = await response.json();
                const randomDeckId = data.deck_id;
                setDeckId(randomDeckId);
            }
            fetchDeckId()
        }, [])


    if (!deckId) {
        return <p> Loading your deck, please wait...</p>
    }

    async function fetchCard() {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const data = await response.json();
        const newCard = data.cards[0];
        setCards([...cards, newCard]);

        setRemainingCards(data.remaining);

        if (data.remaining === 0) {
            alert("Error: No cards available in this deck. Shuffling....");
            shuffleDeck();
        }
    }

    async function shuffleDeck() {
        setIsShuffling(true);
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
        const data = await response.json();
        setIsShuffling(false);
        setCards([]);
        setRemainingCards(data.remaining);
    }

    return (
        <div className="Deck">

            <div className="Deck-buttonContainer">
                <button
                    className="Card-Fetch-btn"
                    onClick={fetchCard}
                >
                    Draw a Card
                </button>

                <button
                    className="Deck-Shuffle-btn"
                    onClick={shuffleDeck}
                    disabled={isShuffling}
                >
                    Shuffle Card
                </button>
            </div>



            <h3> Remaining Cards: {remainingCards} </h3>


            <div className="Deck-cardImage">
                {
                    cards.map(
                        card => (
                            <Card
                                key={card.code}
                                image={card.image}
                                code={card.code}
                            />
                        )
                    )
                }
            </div>

        </div>
    )
}

export default Deck;
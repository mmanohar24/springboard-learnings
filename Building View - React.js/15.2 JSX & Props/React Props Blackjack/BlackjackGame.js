function BlackjackGame() {
    const deck = GetDeck();


    const card1Index = Math.floor(Math.random() * deck.length);
    const card2Index = Math.floor(Math.random() * deck.length);

    // console.log(card1Index);
    // console.log(card2Index);

    while (card1Index === card2Index) {
        card2Index = Math.floor(Math.random() * deck.length);
    }

    const card1 = deck[card1Index];
    const card2 = deck[card2Index];

    // console.log(card1);
    // console.log(card2);

    const totalScore = card1.Score + card2.Score;
    const isBlackjack = totalScore === 21;

    return (
        <div className="BlackjackGame">

            <div className="BlackjackGame-cards">
                <Card code={card1.Code} />
                <Card code={card2.Code} />
            </div>

            <h2 className="BlackjackGame-score">Score: {totalScore}</h2>

            {isBlackjack ? <h3 className="BlackjackGame-blackjack"> 🎉🎉🎉 BLACKJACK!!! 🎉🎉🎉 </h3> : null}

        </div>
    );
}

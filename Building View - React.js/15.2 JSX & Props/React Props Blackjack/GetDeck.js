function GetDeck() {
    const suits = ['H', 'D', 'S', 'C'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];

    const deck = [];

    for (let suit of suits) {
        for (let val of values) {
            let score;

            if (val === 'A') {
                score = 11;
            }
            else if (['0', 'J', 'Q', 'K'].includes(val)) {
                score = 10;
            }
            else {
                score = parseInt(val);
            }

            deck.push(
                {
                    Code: `${val}${suit}`,
                    Score: score
                }
            )
        }
    }
    return deck;
}
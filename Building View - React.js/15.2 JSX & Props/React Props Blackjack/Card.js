function Card({ code }) {
    const imgSrc = `https://deckofcardsapi.com/static/img/${code}.png`;
    return (
        <img className="Card" src={imgSrc} alt={`${code} card`} />
    );
}

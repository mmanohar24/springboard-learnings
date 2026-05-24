function Pokegame(props) {
    let hand1 = [];
    let hand2 = [...props.pokemon];

    let exp1 = 0;
    let exp2 = 0;

    while (hand1.length < hand2.length) {
        let randomIndex = Math.floor(Math.random() * hand2.length);
        let randomPokemon = hand2.splice(randomIndex, 1)[0];
        hand1.push(randomPokemon);
    }

    for (let i = 0; i < hand1.length; i++) {
        exp1 += hand1[i].base_experience
    }

    for (let i = 0; i < hand2.length; i++) {
        exp2 += hand2[i].base_experience
    }

    return (
        <>
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
        </>
    )
}

Pokegame.defaultProps = {
    pokemon: [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
};
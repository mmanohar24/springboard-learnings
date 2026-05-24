function Pokedex({ pokemon, exp, isWinner }) {
    return (
        <div className="Pokedex">

            <p> <b>Total Experience:</b> {exp} </p>

            <p className={isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>

                {isWinner ? ' 👏This Hand Wins' : ' 😔 This Hand Loses'}

            </p>

            <div className="Pokedex-cards">
                {
                    pokemon.map(
                        pokemon => (
                            <PokeCard
                                key={pokemon.id}
                                name={pokemon.name}
                                type={pokemon.type}
                                base_experience={pokemon.base_experience}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            />
                        ))
                }
            </div>

        </div>
    );
}
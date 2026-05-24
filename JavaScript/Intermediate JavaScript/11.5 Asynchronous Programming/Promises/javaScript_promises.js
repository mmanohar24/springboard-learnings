let numberAPI = "http://numbersapi.com/";

// Single Number Fact
function getSingleNumberFact()
{
    fetch(`${numberAPI}random/trivia?json`)
    .then(response  => response.json())
    .then(data => 
        {
            console.log(`Single Number Fact: ${data.text}`)
        })
    .catch(error => console.log(`Error: ${error}`));
}


// Multiple Number Facts

function getMultpleNumberFacts()
{
    // fetch(`${numberAPI}random/5/trivia?json`)
    fetch(`${numberAPI}1..5/?json`)
    .then(response => response.json())
    .then(data => 
        {
            console.log(`Multiple Number Facts:`)
            for( let num in data)
            {
                console.log(`${num}: ${data[num]}`);
            }
        })
    .catch(error => console.log(`Error: ${error}`));
}

// Favorite Number Fact

const promises = [];

for( let i = 0; i < 5; i++)
{
    promises.push( fetch(`${numberAPI}random/trivia?json`).then( response => response.json()) );
}

function getFavoriteNumberFacts()
{
    Promise.all(promises)
    .then(data => 
    {
        console.log(`Favorite Number Facts:`);
        for(let fact of data)
            {
                console.log(fact.text);
            }
    })
    .catch(error => console.log(`Error: ${error}`));
}


// Deck of Cards

let deckAPI = "https://deckofcardsapi.com/api/deck/";

function getSingleCard()
{
    fetch(`${deckAPI}new/draw/?count=1&json`)
    .then( response => response.json() )
    .then( data => 
        {
            console.log(`Single Card: `)
            console.log(`Card: ${data.cards[0].value} of ${data.cards[0].suit}`);
        })
    .catch(error => console.log(`Error: ${error}`));
}

// Two Cards from Same Deck

function getTwoCards()
{
    fetch(`${deckAPI}new/draw/?count=2`)
    .then( response  => response.json())
    .then( data => 
        {
            console.log(`Two Cards from Same Deck: `)
            for( let card of data.cards)
            {
                console.log(`Card: ${card.value} of ${card.suit}`)
            }
        })
    .catch(error => console.log(`Error: ${error}`));
}

// Single Pokemon Card

const API = "https://pokeapi.co/api/v2/pokemon/";

function getSinglePokemon()
{
    fetch(`${API}?count=1&json`)
    .then( response => response.json() )
    .then( data => 
        {
            console.log(`Single Pokemon Card: `)
            console.log( `Name: ${data.results[0].name}`)
            console.log(`URL: ${data.results[0].url}`)
            // console.log( `Name: ${data.abilities[0].ability.name}`)
            // console.log(`URL: ${data.abilities[0].ability.url}`)
        })
    .catch(error => console.log(`Error: ${error}`));
}

// Multiple Pokemon Cards

const pokemonPromises = [];

for (let i = 0; i < 5; i++)
{
    pokemonPromises.push(fetch(`${API}?limit=1&offset=${i}`).then(response => response.json()) )
}

function getPokemonCard()
{
    Promise.all(pokemonPromises)
    .then(data => 
        {
            console.log(`Multiple Pokemon Cards: `)
            for ( let pokemon of data)
            {
                console.log(`Name: ${pokemon.results[0].name}`);
                console.log(`URL: ${pokemon.results[0].url}`);
            }
        })
    .catch(error => console.log(`Error: ${error}`));
}



// Get Pokemon Name and Description

async function getPokemonDetails()
{
    try
    {
        const randomOffset = Math.floor(Math.random() * 1000);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=1&offset=${randomOffset}`);
        const data = await response.json();
        
        const pokemonName = data.results[0].name;
        const pokemonURL = data.results[0].url;

        const pokemonSpeciesResponse = await fetch(pokemonURL);
        const pokemonSpeciesData = await pokemonSpeciesResponse.json();
        
        const pokemonDescription = pokemonSpeciesData.flavor_text_entries?.find( text => text?.language?.name === "en")?.flavor_text;

        if(pokemonDescription)
            {
                console.log(`${pokemonName}: ${pokemonDescription.replace(/\n|\f/g, ' ')}`);
            }
        else
        {
            console.log(`${pokemonName}: Description not found!`);
        }
    }
    catch(error)
    {
        console.log(`Error: ${error}`);
    }
}
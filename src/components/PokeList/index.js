import React from 'react';
import Pokemon from '../Pokemon'

const PokeList = () => {
    const pokemonList = [
        {
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
    ]
    return(
        <div className="">
            {pokemonList && pokemonList.map(pokemon => < Pokemon pokemon={pokemon}/>)}
        </div>
    );
};

export default PokeList;
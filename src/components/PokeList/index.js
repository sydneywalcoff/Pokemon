import React from 'react';
import Pokemon from '../Pokemon'
import { useFetch } from '../../utils/useFetch';

const PokeList = () => {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=25';
    const { data } = useFetch(pokemonUrl, {})
    const pokemonList = data?.results;
    return(
        <div className="">
            {pokemonList && pokemonList.map(pokemon => < Pokemon pokemon={pokemon}/>)}
        </div>
    );
};

export default PokeList;
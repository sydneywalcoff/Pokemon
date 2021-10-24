import React, { useState } from 'react';
import Pokemon from '../Pokemon'
import { useFetch } from '../../utils/useFetch';

const PokeList = () => {
    // const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    let pokemonList;
    let pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset='+ offset;
    const { data: pageData, isLoading } = useFetch(pokemonUrl, {})

    pokemonList = pageData?.results;
    const handleNextButton = () => {
        setOffset(offset+25);
    };
    

    if(isLoading) {
        return (
            <div className='text-center mt-5'>Loading...</div>
        );
    }
    
    return (
        <div className="main">
            <div className="row justify-content-between">
                {pokemonList && pokemonList.map(pokemon => < Pokemon pokemon={pokemon} />)}
            </div>
            <div className="d-flex my-3 justify-content-center">
                <button className="btn btn-danger mx-1">prev.</button><button className="btn btn-danger mx-1" onClick={handleNextButton}>next.</button>
            </div>
        </div>
    );
};

export default PokeList;
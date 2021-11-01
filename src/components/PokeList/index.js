import React, { useState } from 'react';
import Pokemon from '../Pokemon'
import { useFetch } from '../../utils/useFetch';
import { useParams, useHistory } from 'react-router-dom'

const PokeList = () => {
    const { page: intialPage } = useParams();
    const [page, setPage] = useState(parseInt(intialPage,10));
    const history = useHistory();
    const perPage = 25;
    const [offset, setOffset] = useState((page-1)*25);
    let pokemonList;
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`;
    const { data: pageData, isLoading } = useFetch(pokemonUrl, {})

    pokemonList = pageData?.results;
    console.log(page)
    
    const handleNextButton = () => {
        setOffset(offset+25);
        history.push(`/${page +1}`);
        setPage(page + 1)
    };
    const handlePrevButton = () => {
        if(offset) {
            setOffset(offset -25);
            history.push(`/${page - 1}`);
            setPage(page - 1);
        }
    };

    if(isLoading) {
        return (
            <div className='text-center mt-5'>Loading...</div>
        );
    }
    
    return (
        <div className="main">
            <div className="row">
                {pokemonList && pokemonList.map(pokemon => < Pokemon pokemon={pokemon} />)}
            </div>
            <div className="d-flex my-3 justify-content-center">
                {offset > 0 && <button className="btn btn-danger mx-1" onClick ={handlePrevButton}>prev.</button>}
                <button className="btn btn-danger mx-1" onClick={handleNextButton}>next.</button>
            </div>
        </div>
    );
};

export default PokeList;
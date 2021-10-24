import React from 'react';
import { useFetch } from '../../utils/useFetch';

const Pokemon = ({ pokemon }) => {
    const { name, url } = pokemon;
    const { data } = useFetch(url, {});
    const sprites = data?.sprites;
    const imageUrl = sprites?.front_default;
    

    return(
        <div className = "card col-3">
            <img src = {imageUrl} className="card-img-top" />
            <h5 className="card-title text-center">{name}</h5>
        </div>
    );

};

export default Pokemon;
import React from 'react';

const Pokemon = ({ pokemon }) => {

    return(
        <div className = "card w-25">
            <img src = {pokemon.image} className="card-img-top" />
            <h5 className="card-title text-center">{pokemon.name}</h5>
        </div>
    );

};

export default Pokemon;
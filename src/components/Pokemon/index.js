import React, { useState } from 'react';
import { useFetch } from '../../utils/useFetch';
import Modal from '../Modal';

const Pokemon = ({ pokemon }) => {
    const [showModal, setShowModal] = useState(false);
    const { name, url } = pokemon;
    const { data } = useFetch(url, {});
    const sprites = data?.sprites;
    const imageUrl = sprites?.front_default;
    const statList = data?.stats;
    const typeList = data?.types;
    const weight = data?.weight;

    const handleClick = () => {
        setShowModal(!showModal);
    };
    

    return(
        <>
            <div className = "card col-3" key={name}>
                <img src = {imageUrl} className="card-img-top" alt={name}/>
                <h5 className="card-title text-center" onClick={handleClick}>{name}</h5>
            </div>
            {showModal && <Modal show ={showModal} image= {imageUrl} pokemonName={name} stats={statList} types={typeList} weight={weight} />}
        </>
    );

};

export default Pokemon;
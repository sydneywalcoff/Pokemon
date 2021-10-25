import React, { useState } from 'react';
import { useFetch } from '../../utils/useFetch';
import './styles.css'

const Pokemon = ({ pokemon }) => {
    const [openModal, setOpenModal] = useState(false);
    const { name, url } = pokemon;
    const { data } = useFetch(url, {});
    const sprites = data?.sprites;
    const imageUrl = sprites?.front_default;
    const statList = data?.stats;
    const typeList = data?.types;
    const weight = data?.weight;

    const toggleModal = () => {
        setOpenModal(!openModal);
    };
    const statsArr = [];
    statList?.forEach(stat => {
        const baseStat = stat.base_stat;
        const statName = stat.stat.name;
        const statString = `${statName}: ${baseStat}`
        statsArr.push(statString);
    })
    console.log(statsArr)
    return (
        <>
            <div className="card col-3" key={name}>
                <img src={imageUrl} className="card-img w-75" alt={name} />
                <h5 className="card-title text-center" onClick={toggleModal}>{name}</h5>
            </div>
            {openModal &&
                <div className="modal display-block">
                    <section className="modal-main card w-25 row">
                        <div className="d-flex justify-content-end">
                            <button type="button" className="col-1 btn" onClick={toggleModal}>
                                x
                            </button>
                        </div>
                        <div class>

                        </div>
                        <h5 className="card-title text-center">{name}</h5>
                        <img src={imageUrl} className="card-img w-75 justify-self-center" alt={name} />
                        <div className ="stats container card w-75 mb-2">
                            {statsArr && statsArr.map(stat => (
                                <p className="text-center">{stat}</p>
                            ))}
                        </div>
                    </section>
                </div>
            }
        </>
    );

};

export default Pokemon;
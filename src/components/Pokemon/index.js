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
    // const statsArr = [];
    // statList.forEach(stat => {
    //     const baseStat = stat.base_stat;
    //     const statName = stat.stat.name;
    //     const statObj = {
    //         [statName]: baseStat
    //     }
    //     statsArr.push(statObj);
    // })


    return (
        <>
            <div className="card col-3" key={name}>
                <img src={imageUrl} className="card-img-top" alt={name} />
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
                        <div className="" key={name}>
                            <img src={imageUrl} className="card-img-top" alt={name} />
                            <h5 className="card-title text-center">{name}</h5>
                        </div>
                    </section>
                </div>
            }
        </>
    );

};

export default Pokemon;
import React from 'react';
import './styles.css'

const Modal = ({ show, pokemonName, stats, types, weight, image }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main card w-25 row">
        <div className="d-flex justify-content-end">
          <button type="button" className="col-1 btn">
            x
          </button>
        </div>
        <div className="" key={pokemonName}>
          <img src={image} className="card-img-top" alt={pokemonName} />
          <h5 className="card-title text-center">{pokemonName}</h5>
        </div>
      </section>
    </div>
  );
};

export default Modal;
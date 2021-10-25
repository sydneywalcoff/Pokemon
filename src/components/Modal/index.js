import React from 'react';
import './styles.css'

const Modal = ({ show, pokemonName, stats, types, weight, image }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(show)
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="card col-3" key={pokemonName}>
          <img src={image} className="card-img-top" alt={pokemonName} />
          <h5 className="card-title text-center">{pokemonName}</h5>
        </div>
        <button type="button">
          x
        </button>
      </section>
    </div>
  );
};

export default Modal;
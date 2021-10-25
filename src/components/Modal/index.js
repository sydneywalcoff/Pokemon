import React from 'react';

const Modal = ({ show, pokemonName, stats, types, weight }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {pokemonName}
        <button type="button">
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
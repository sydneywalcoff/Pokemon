import React from 'react';

const PaginationButtons = () => {
    return(
        <div className="d-flex my-3 justify-content-center">
            <button className="btn btn-danger mx-1">prev.</button><button className="btn btn-danger mx-1">next.</button>
        </div>
    );
};

export default PaginationButtons;
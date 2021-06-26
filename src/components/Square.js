import React from 'react';

const Square = ({ value, onClick, isWinningSquares }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontwight: isWinningSquares ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;

import React from 'react';

const statusmessage = ({ winner, current }) => {
  // const message = winner
  //   ? `winner is ${winner}`
  //   : `next player is ${current.isXNext ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        noMovesLeft &&
        `next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O are tied'}
    </h2>
  );
};

export default statusmessage;

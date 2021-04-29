import React from 'react';
import Board from './Board'

export default class Game extends React.Component {
    render() {
      sessionStorage.setItem('winsX', 0);
      sessionStorage.setItem('winsO', 0);
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  
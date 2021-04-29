import React from 'react';
import Square from './Square'
import calcWinner from '../utils/calcWinner'

        

export default class Board extends React.Component {



    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }


     resetGame(){
        const squares = this.state.squares.slice();
        squares.fill(null);

        this.setState({
        squares: squares,
        xIsNext: 'X'
        });

    }

    renderSquare(i) {
     return <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)
        }
      />
    }

    handleClick(i) {

        const squares = this.state.squares.slice();
        if (calcWinner(squares) || squares[i]) {
            return;
          }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
        
      }
  

    render() {
      
      
        const winner = calcWinner(this.state.squares);
        let status;
        
        if (winner) {
          var winHistoryX = sessionStorage.getItem('winsX');
          var winHistoryY = sessionStorage.getItem('winsO');

          if(winner === "X") {
            
            winHistoryX++;
            sessionStorage.setItem('winsX', winHistoryX);
            status = 'Winner: ' + winner;
            //sessionStorage.setItem(winHistoryX);
    
          }else{
          
            winHistoryY++;
            sessionStorage.setItem('winsO', winHistoryY);
          }

        //this.updateWins("X")
        
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
          
        }
  
      return (
        <div>
            <div className="score">O: {sessionStorage.getItem('winsO')} wins  </div>
            <div className="score">X: {sessionStorage.getItem('winsX')} wins  </div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="btn-reset">
              <button type="button" onClick={() => this.resetGame()}>Reset Game</button>
          </div>
        </div>
      );
    }
  }
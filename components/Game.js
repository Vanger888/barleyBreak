import React from 'react';
import Board from './Board.js';
import Buttons from './Buttons.js';
import DisplayWin from './DisplayWin.js'

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: this.boardGenerator(15),
      time: new Date(),
      isWin: false
    };
  }
  
  getRandom(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
  }

  boardGenerator(n) {
    let boardArr = [];
    /*for (let i = 1; i <= n; i++) {
      boardArr.push(i);
    }
    boardArr.splice(boardArr.length - 2, 0, null);*/
    while(boardArr.length < n){
      const item = this.getRandom(1, 15);
      if(boardArr.indexOf(item) === -1) {
        boardArr.push(item);
      }
    }
    boardArr.push( null);
    return boardArr;
  }

  handleClick(i) {

    if (this.state.isWin) return;

    const squares = this.state.squares.slice();
    if (squares[i-1] !== null && squares[i+1] !== null &&
      squares[i-4] !== null && squares[i+4] !== null) return;

    for (let j = 0; j < squares.length; j++){
      if (squares[j] === null) squares[j] = squares[i];
    }
    squares[i] = null;
    this.isWin(squares);
    this.setState({squares: squares});

  }
  
  isWin(arr) {
    const isWin = arr.slice(0, -1).every((item, i) => item - 1 === i);
    if (isWin) this.setState({isWin: !this.state.isWin});
  }


  handleClickNewGame() {
    this.setState({squares: this.boardGenerator(15)});
    this.setState({time: new Date()});
    this.setState({isWin: false});
  }

  render() {
    return (
      <div className="game">
          <Buttons
          onClick={(i) => this.handleClickNewGame()}
          />
        <div>
          <Board 
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
          />
        </div>
          <DisplayWin
            squares={this.state.squares}
            time={this.state.time}
            isWin={this.state.isWin}
          />
      </div>
    );
  }
}


export default Game;
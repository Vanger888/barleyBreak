import React from 'react';
import Square from './Square.js';

class Board extends React.Component {

  renderSquare(item, i) {
    return (
      <Square 
        key= {i}
        value={item}
        style={{gridArea:`${i}`}}
        onClick = {() => this.props.onClick(i)}
      />
    );
  }

  autoRender(arr) {
    const items = arr.map((item, i) => this.renderSquare(item, i));
    return items;
  }


  boardStyle(arr) {
    const boardStyle = {
      gridTemplateAreas:
       `"${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}"
        "${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]}"
        "${arr[8]} ${arr[9]} ${arr[10]} ${arr[11]}"
        "${arr[12]} ${arr[13]} ${arr[14]} ${arr[15]}"`
  }
    return boardStyle;
  }


  render() {

    return (

      <div className="game-board" style={this.boardStyle(this.props.squares)}>
          {this.autoRender(this.props.squares)}
      </div>
    );
  }
}

export default Board;
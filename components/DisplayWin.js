import React from 'react';

class DisplayWin extends React.Component {
  
  win(arr, time, isWin) {
    if (isWin) {
      const winTime = new Date();
      const divWin = `Congratulation! You win! Time:
        ${((winTime.getTime() - time.getTime()) / 1000).toFixed(2)} seconds`;
      return divWin;
    }
  }

  render() {
    return (
      <div className='game-info'>{this.win(this.props.squares, this.props.time, this.props.isWin)}</div>
      );
  } 
}


export default DisplayWin;
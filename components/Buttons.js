import React from 'react';

class Buttons extends React.Component {

  renderNewGame(props) {
    return (
        <button className="control-button" onClick={this.props.onClick}>
          New Game
        </button>
      );
  }

  render() {
    return (
      <div className='buttons'>
        {this.renderNewGame(this.props)}
      </div>
    );
  }
}

export default Buttons;
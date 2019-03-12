import React from 'react';

function Square(props) {
      if (props.value === null) {
        return (
        <button className="emptySquare">
          {props.value}
        </button>
      );
      }
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
    }

export default Square;
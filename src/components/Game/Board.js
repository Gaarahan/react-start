import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    if (this.props.currentRenderCount % 3 === 0) {
      throw new Error('OMG!!!')
    }
    return (
      <div>
        {
          [0, 1, 2].map(row => (
              <div className="board-row" key={row.toString()}>
                {this.renderSquare(row * 3)}
                {this.renderSquare(row * 3 + 1)}
                {this.renderSquare(row * 3 + 2)}
              </div>
          ))
        }
      </div>
    );
  }
}

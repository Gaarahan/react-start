import React from 'react';
import Board from './Board';
import GameRender from './GameRender.js';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      currentRenderCount: 1,
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const newSquare = current.squares.slice();

    if (calculateWinner(newSquare) || newSquare[i]) {
      return;
    }

    newSquare[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([
        {
          squares: newSquare,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((_, moveIndex) => {
      const desc = moveIndex ? 'Go to move #' + moveIndex : 'Go to game start';
      return (
          <li key={moveIndex}>
            <button onClick={() => this.jumpTo(moveIndex)}>{desc}</button>
          </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }


    return (
        <div>
          <div className="title">
            <button onClick={() => this.renderGameBoard()}>Refresh</button>
          </div>

          <br/>

          <div className="game">
            <GameRender resetKey={'currentRenderCount'} onReset={() => this.renderGameBoard()}>
              <div className="game-board">
                <Board
                    currentRenderCount={this.state.currentRenderCount}
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                />
              </div>
              <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
              </div>
            </GameRender>
          </div>
        </div>
    );
  }

  renderGameBoard() {
    this.setState({
      currentRenderCount: this.state.currentRenderCount + 1,
    });
  }
}

import React from 'react';
import './App.css'

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>{props.value}</button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(19).fill("😃"),
      score: 0
    }
  }

  fillSquares() {
    let squares = Array(19).fill("😀")
    squares[Math.floor(Math.random() * squares.length)] = "😃"

    this.setState({ squares })
  }

  handleClick(i) {
    let score = this.state.score;
    if (this.state.squares[i] === "😃") {
      score++;
    } else {
      score--;
    }
    this.setState({ score });
    this.fillSquares()
  }

  render() {
    const score = 'Score:' + this.state.score;
    return (
      <div>
        <div>
          {this.state.squares.map((square, i) => <Square value={square} onClick={() => this.handleClick(i)} />)}
        </div>
        <div>
          {score}
        </div>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      < div className='Div'>
        < div > Find the 😃 </div >
        <Board/>
      </div >
    )
  }
}

export default App;
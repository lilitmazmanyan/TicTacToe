import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [`table {
    border: 1px lawngreen solid;
    width: 300px;
    height: 300px;
  }

  tr td {
    border: 1px lawngreen solid;
    width: 100px;
    height: 100px;
  }`]
})

export class BoardComponent {
  squares: string[];
  xIsNext: boolean;
  winner: string;
  @Input() playerX: string;
  @Input() playerO: string;

  constructor() {
    this.newGame();
  }

  get player() {
    return this.xIsNext ? this.playerX : this.playerO;
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  makeMove(event: Event) {
    const td = event.currentTarget;
    if (!this.squares[td.id]) {
      td.innerHTML = this.player;
      this.squares.splice(td.id, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

  reload() {
    location.reload();
  }
}

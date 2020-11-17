import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;

  ngOnInit(): void {
    this.newGame();
  }

  // tslint:disable-next-line:typedef
  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
  }

  // tslint:disable-next-line:typedef
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // tslint:disable-next-line:typedef
  makeMove(i: number) {
    if (!this.squares[i]) {
      this.squares.splice(i, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
  }


}

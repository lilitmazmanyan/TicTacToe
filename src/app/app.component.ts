import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';
  changeTheComponent;
  p1;
  p2;

  onGameStarted(names: string[]) {
    this.p1 = names.p1;
    this.p2 = names.p2;
    this.changeTheComponent = true;
  }
}

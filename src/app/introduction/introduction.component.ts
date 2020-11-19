import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
})
export class IntroductionComponent {
  @Output() gameStarted = new EventEmitter<string[]>();

  startTheGame() {
    if (!document.getElementById('playerX').value) {
      document.getElementById('playerX').value = 'X';
    }

    if (!document.getElementById('playerO').value) {
      document.getElementById('playerO').value = 'O';
    }

    const p1 = (document.getElementById('playerX').value);
    const p2 = (document.getElementById('playerO').value);
    this.gameStarted.emit({p1, p2});
  }
}

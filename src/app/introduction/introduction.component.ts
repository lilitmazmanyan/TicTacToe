import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {
  @Output() gameStarted = new EventEmitter<void>();

  startTheGame() {
    this.gameStarted.emit();
  }
}

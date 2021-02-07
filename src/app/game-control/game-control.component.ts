import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  increment: number = 0;

  @Output() intervalFired = new EventEmitter<number>();

  interval;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.increment);
      this.increment++;
    },1000); 
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}

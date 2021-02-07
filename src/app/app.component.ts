import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumberArray: number[] = [];

  evenNumberArray: number[] = [];

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0) {
      this.evenNumberArray.push(firedNumber);
    } else {
      this.oddNumberArray.push(firedNumber);
    }
  }
  
}

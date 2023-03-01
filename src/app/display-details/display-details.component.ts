import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {

  buttonText = "Show Details";
  showDetails = false;
  logEvents: any = [];
  numClicks = 0;
  currentTimestamp = new Date();
  stopNum = 4;
  constructor() { }
  
    ngOnInit() {
    }
  
    hideDetails() {
      this.numClicks++;
      if (this.showDetails) {
        
        this.buttonText = 'Display Details';
        this.logEvents.push(this.currentTimestamp);
        return this.showDetails = false;
      }
      else {
        this.buttonText = 'Hide Details';
        this.logEvents.push(this.currentTimestamp);
        return this.showDetails = true;
      }
    }

    writeLog() {
      
    }

}

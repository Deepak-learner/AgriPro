import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livepredict',
  templateUrl: './livepredict.component.html',
  styleUrls: ['./livepredict.component.css']
})
export class LivepredictComponent implements OnInit {


  isRunning  = false;

  constructor() { }

  ngOnInit(): void {
    this.isRunning = false;
  }

  liveStart() {
    this.isRunning = !this.isRunning;
  }

}

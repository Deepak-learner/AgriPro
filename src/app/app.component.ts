import { Component, OnInit } from '@angular/core';
import { MarketService } from './market/market.service';
import { WeedserviceService } from './weedservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private marketService: MarketService, private weedService: WeedserviceService) {}


  ngOnInit() {
    this.marketService.getImageDetailList();
    this.marketService.getPredictionDetailList();
    this.weedService.getWeedDetailList();
  }

  title = 'AgriPro';
}

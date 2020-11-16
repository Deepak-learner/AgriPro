import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MarketService } from '../market/market.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private marketService: MarketService, private authService: AuthService, private changeDetector: ChangeDetectorRef) { }


  predictionList: any = [];
  user: User;

  p1: {lat: number, lng: number};
  p2: {lat: number, lng: number};

  ngOnInit(): void {

    this.marketService.predictionDetailList.snapshotChanges().subscribe(
      list => {
        const predictions = list.map(item => { return item.payload.val(); });
        for(const prediction of predictions) {
          const distance = this.getDistance({lat:this.authService.user.latitude, lng: this.authService.user.longitude}, {lat: prediction.latitude, lng: prediction.longitude});
          console.log(distance);
          if(prediction.owner !== this.authService.user.id && prediction.category==='Weed') {
            this.predictionList.push({...prediction, distance: distance });
        }
        console.log(this.predictionList);
        this.changeDetector.detectChanges();
      }
    }
    );

    this.user = this.authService.user;
  }



  rad = (x) => {
    return x * Math.PI / 180;
  };

  getDistance = (p1, p2) => {
    let R = 6378137; // Earth’s mean radius in meter
    let dLat = this.rad(p2.lat - p1.lat);
    let dLong = this.rad(p2.lng - p1.lng);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return Math.round(d / 1000); // returns the distance in meter
  };


}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { WeedserviceService } from '../weedservice.service';

@Component({
  selector: 'app-weedopedia',
  templateUrl: './weedopedia.component.html',
  styleUrls: ['./weedopedia.component.css']
})
export class WeedopediaComponent implements OnInit {

  constructor(private weedService: WeedserviceService, private changeDetector: ChangeDetectorRef) { }

  weedList: any = [];
  rowIndexArray: any[];

  ngOnInit(): void {
    this.weedService.weedDetailList.snapshotChanges().subscribe(
      list => {
        this.weedList = list.map(item => { return item.payload.val(); });
        console.log(this.weedList);
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.weedList.length+1) / 3)).keys());
        this.changeDetector.detectChanges();
      }
    );
  }

}

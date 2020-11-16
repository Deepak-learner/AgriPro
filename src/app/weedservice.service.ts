import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class WeedserviceService {

  weedDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getWeedDetailList() {
    this.weedDetailList = this.firebase.list('weeds');
  }

  insertWeedDetails(imageDetails) {
    this.weedDetailList.push(imageDetails);
  }
}

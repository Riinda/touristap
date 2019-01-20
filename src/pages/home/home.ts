import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:string = "Smith";
  Iname: String = "Jorn"

  constructor(public navCtrl: NavController) {

  }
show() {

alert (this.name+" "+this.Iname);

}
goToPlace(){
  this.navCtrl.push(PlacePage);

}
}

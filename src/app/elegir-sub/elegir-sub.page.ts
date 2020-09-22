import { Component, OnInit } from '@angular/core';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { INotificationPayload } from 'cordova-plugin-fcm-with-dependecy-updated';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-elegir-sub',
  templateUrl: './elegir-sub.page.html',
  styleUrls: ['./elegir-sub.page.scss'],
})
export class ElegirSubPage implements OnInit {

  constructor(public iab: InAppBrowser) { }

  ngOnInit() {
  }

  public abrirSub1() {
    const browser = this.iab.create('https://escuela.powerexplosive.com/membership-area1593582164571', '_self', {location: 'no'});
  // tslint:disable-next-line: no-trailing-whitespace
  } 

  public abrirSub2() {
    const browser = this.iab.create('https://escuela.powerexplosive.com/membership-area1593582164571', '_self', {location: 'no'});
  }

  public abrirSub3() {
    const browser = this.iab.create('https://escuela.powerexplosive.com/membership-area1593582164571', '_self', {location: 'no'});
  }

}

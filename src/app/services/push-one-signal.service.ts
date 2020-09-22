import { Injectable } from '@angular/core';
// import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushOneSignalService {
  // private oneSignal: OneSignal
  constructor() { }


  // configuracionInicial() {
  //   this.oneSignal.startInit('f87021e7-20be-4516-a3c6-bb36f7e3f237', '407917863408');

  //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

  //   this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
  //     console.log('notificación recibida', noti);
  //   });

  //   this.oneSignal.handleNotificationOpened().subscribe(( noti ) => {
  //     console.log('notificación abierta', noti);
  //   });

  //   this.oneSignal.endInit();
  // }
}

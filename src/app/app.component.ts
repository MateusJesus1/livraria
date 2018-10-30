import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'SigninPage';
  showSplash = true;

  constructor(  platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private oneSignal: OneSignal) {
platform.ready().then(() => {

statusBar.styleDefault();
splashScreen.hide();
this.configurePushNotification();

});
}


configurePushNotification(){
window["plugins"].OneSignal
.startInit('0f5c714f-c6a5-42e6-a32b-da1c69c8a3ac', '441126008337');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);


this.oneSignal.handleNotificationReceived().subscribe(() => {
// do something when notification is received
});


this.oneSignal.handleNotificationOpened().subscribe(() => {
// do something when a notification is opened
});

this.oneSignal.endInit();
}


}


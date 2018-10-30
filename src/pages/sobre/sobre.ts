import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AccountProvider } from './../../providers/account/account';

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {
  userName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }

  signOut(){
    this.auth.auth.signOut();
      const userState = this.auth.authState.subscribe( user =>{
        if(!user){
          this.userName = '';
          this.navCtrl.setRoot('SigninPage');
          userState.unsubscribe();
        }
      })
  }

}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { OneSignal } from '@ionic-native/onesignal';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LivrosApiProvider } from '../providers/livros-api/livros-api';
import { LivrosStorageProvider } from '../providers/livros-storage/livros-storage';
import { LivrosNaoLidosProvider } from '../providers/livros-nao-lidos/livros-nao-lidos';
import { LivrosLidosProvider } from '../providers/livros-lidos/livros-lidos';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { AccountProvider } from '../providers/account/account';



@NgModule({
  declarations: [
    MyApp,
    TabsPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBixxf7vpzxblw5yqMzp5IKeV06QUyfYbU",
      authDomain: "cadastro-7c77f.firebaseapp.com",
      databaseURL: "https://cadastro-7c77f.firebaseio.com",
      projectId: "cadastro-7c77f",
      storageBucket: "cadastro-7c77f.appspot.com",
      messagingSenderId: "441126008337"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivrosNaoLidosProvider,
    LivrosApiProvider,
    LivrosStorageProvider,
    LivrosNaoLidosProvider,
    LivrosLidosProvider,
    AccountProvider,

  ]
})
export class AppModule {

}

import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AccountProvider } from './../../providers/account/account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  form: FormGroup;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private accountProvider: AccountProvider,
    private toast: ToastController) {

      this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.form.valid) {
      this.accountProvider.login(this.form.value)
       .then( (user: any) => {
         if (user.emailVerified){
           this.navCtrl.setRoot(TabsPage);
         } else {
           this.toast.create({ message:'Seu e-mail ainda não foi verificado. Por favor acesse seu e-mail e clique no link para verificar conta', duration: 6000 }).present();
         }
      })
      .catch(message => {
        this.toast.create({message: message, duration: 3000}).present();
      })
    }
  }




}

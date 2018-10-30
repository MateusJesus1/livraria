import { AccountProvider } from './../../providers/account/account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  form: FormGroup;
  userName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private accountProvider: AccountProvider,
    private toast: ToastController,
    private auth: AngularFireAuth) {

      this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit(){
    if(this.form.valid) {
      this.accountProvider.forgotEmail(this.form.value.email).then( (user:any) => {
        this.toast.create({ message: 'Um e-mail foi enviado para que você resete sua senha', duration: 6000}).present();
        this.navCtrl.pop();
      })
      .catch(message => {
        this.toast.create({ message: message, duration: 3000}).present();
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public step: Number = 1;
  public selectedImage = false;
  public sendingOtp: boolean = false;

  constructor(
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  sendOtp() {
    this.sendingOtp = true
    setTimeout(() => {
      this.step = 2;
    }, 1500);
  }

  verifyOtp() {
    this.step = 3;
  }

  uploadImage() {
    this.step = 4;
  }

  details() {
    this.step = 5;
  }

  details2() {
    this.step = 6;
  }




  register() {
    this.router.navigate(['tnc']);
  }


  nxt(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
  
  async resendOtp() {
    const toast = await this.toastController.create({
      message: 'OTP sent',
      duration: 2500,
      mode: 'md',
      translucent: true
    });
    toast.present();
  }

  selectImage() {
  }
}

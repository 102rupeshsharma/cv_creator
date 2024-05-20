import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

  isCaptchaResolved = false;
  captchaResponse: string | null = null;

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  onCaptchaResolved(captchaResponse: string | null): void {
    this.isCaptchaResolved = true;
    this.captchaResponse = captchaResponse;
    console.log('Captcha resolved with response:', captchaResponse);
  }

  checkFormValidity() {
    return this.username && this.email && this.password && this.confirmPassword && (this.password === this.confirmPassword);
  }

  onSignUp():void {
    if (this.checkFormValidity() && this.isCaptchaResolved) {
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.dataService.addUser(newUser);
      alert('Registeration Successfull');
      this.router.navigate(['/home'])

    } else {
      alert('Registeration Failed.')
    }
  }
}


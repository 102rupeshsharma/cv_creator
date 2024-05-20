import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private dataService: DataService,  private router: Router) {}


  onLogin() {
    if (!this.email || !this.password) {
      alert('Please fill in all fields.');
    }
    const users = this.dataService.getAllUsers();
    const user = users.find(user => user.email === this.email && user.password === this.password);
    if (user) {
      alert('Login successful!');
      this.router.navigate(['/home']); // Assuming 'home' is the route for your home page
    } else {
     alert('User does not exist. Please check your email and password.')
    }
  }
}

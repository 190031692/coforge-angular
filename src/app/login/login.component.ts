import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Static login credentials
  validUsername = 'admin';
  validPassword = 'password';

  //DI - Router DI using Constructor
  constructor(private router: Router) {}

  login() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid credentials, please try again.';
    }
  }

}

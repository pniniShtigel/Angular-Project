import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.getUserList().subscribe(users => {
      const foundUser = users.find(user => user.name === this.username);
      if (foundUser) {
        if (foundUser.password === this.password) {
          sessionStorage.setItem('currentUser', JSON.stringify(foundUser));
          console.log('User logged in:', foundUser);
     

          this.router.navigate(['/all-recipes']); // Navigate to home page on successful login
        } else {
          this.loginError = 'Incorrect password, please try again.';
        }
      } else {
        this.router.navigate(['/register', { name:this.username }]);

        // this.router.navigate(['/register'], { queryParams: { username: this.username } });
      }
    });
  }
}

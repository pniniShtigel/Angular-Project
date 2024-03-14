import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { User } from '../../../classes/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone:true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],

})
export class RegisterComponent implements OnInit{
  user: User = new User(0, '', '', '', ''); 
  registrationError: string = '';
  constructor(private route: ActivatedRoute, private router: Router,private userService: UserService) { }
  
  ngOnInit(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
 this.user.name=name
  }

  register() {
    console.log(this.user)
 
    // this.userService.addUser(this.user).subscribe(
    //   () => {
    //     this.router.navigate(['/all-recipes']);
    //   },
    //   error => {
    //     // Handle registration error
    //     this.registrationError = 'Failed to register. Please try again later.';
    //   }
    // );
    this.userService.addUser(this.user).subscribe(
      () => {
        this.router.navigate(['/all-recipes']);
      },
      (error: any) => { // Type any allows access to potential error details
        console.error('Registration error:', error); // Log the error for debugging
        this.registrationError = 'הרישום נכשל. ';
  
        // Check for specific error codes or messages from the server
        if (error.status === 400 && error.error) {
          this.registrationError += error.error.message; // Extract specific error message
        } else {
          this.registrationError += 'אנא נסה שוב מאוחר יותר.';
        }
      }
    );
  }
}

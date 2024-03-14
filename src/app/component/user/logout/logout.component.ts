import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
      console.error('currentUser is not found in sessionStorage');
      return;
    }

    // מחיקת פרטי המשתמש מ-sessionStorage
    console.log("user", currentUser);
    console.log('Before deletion:', sessionStorage);
    sessionStorage.removeItem('currentUser');
    Swal.fire({
      title: 'success',
      text: 'log out successfully',
      icon: 'success',
      confirmButtonColor: '#f39c12', 
      background: '#000000', 
      color:'#ffffff',
      iconColor:"#f39c12"
    });
    this.router.navigate(['/home'])
  }
  
}







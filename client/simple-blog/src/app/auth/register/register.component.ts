import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'; // Import AuthService
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add any other necessary imports
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    if (this.username && this.password && this.email) {
      this.authService.register(this.username, this.password, this.email).then(success => {
        console.log('Registration success:', success); 
        if (success) {
          alert('Registration successful! You can now log in.');
          console.log('Navigating to login...');
          this.router.navigate(['/login']);
        } else {
          console.log('Navigating to login.SSASA..');
          alert('Registration failed. Please try again.');
        }
      }).catch(error => {
        console.error(error);
        alert('Registration failed. Please try again.');
      });
    } else {
      alert('Please fill in all fields.');
    }
  }
}

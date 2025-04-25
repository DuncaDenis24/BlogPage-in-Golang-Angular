import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule], 
  template: `
    <div class="container">
      <h1>Simple Blog</h1>

      <nav>
        <button *ngIf="!authService.isLoggedIn()" [routerLink]="['/login']">Login</button>
        <button *ngIf="!authService.isLoggedIn()" [routerLink]="['/register']">Register</button>
        <button *ngIf="authService.isLoggedIn()" [routerLink]="['']">Home</button>
        <button *ngIf="authService.isLoggedIn()" (click)="logout()">Logout</button>
        <button *ngIf="authService.isLoggedIn()" [routerLink]="['/user']">User</button>
      </nav>

      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  constructor(public authService: AuthService, public router: Router) {}
  title = 'simple-blog';
  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/handlers/auth'; 

  constructor(private http: HttpClient, private router:Router) { }

  login(username: string, password: string): Promise<boolean> {
    return this.http.post<{ token: string, user: any  }>(`${this.apiUrl}/login`, { username, password })
      .toPromise()
      .then(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token); 
          localStorage.setItem('user', JSON.stringify(response.user)); 
        }
        return true;
      })
      .catch(() => false);
  }
  register(username: string, password: string, email: string): Promise<boolean> {
    return this.http.post(`${this.apiUrl}/register`, { username, password, email })
      .toPromise()
      .then((response: any) => {
        if (response && response.message === 'User registered successfully') {
          console.log('Registration successful:', response); 
          alert('Registration successful! You can now log in.'); 
          return true;  
        } else {
          alert('Registration failed. Please try again.');
          console.error('Registration failed:', response);
          return false;  
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error); 
        return false;  
      });
  }
  
  logout(): void {
    localStorage.removeItem('authToken'); 
    localStorage.removeItem('user'); 
    this.router.navigate(['/posts']); 
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}

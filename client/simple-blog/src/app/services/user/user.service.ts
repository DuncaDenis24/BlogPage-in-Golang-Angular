import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/handlers'; 
  constructor(private http: HttpClient) { }
  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/${id}`);
  }
  updateUser(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/user/${id}`, data);
  } 
}

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';


  @Injectable({
    providedIn: 'root'
  })
  export class PostService {
    private apiUrl = 'http://localhost:8080/handlers/posts'; 
    constructor(private http: HttpClient) { }

    getPosts(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
    getPost(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<any>(url);
    }
  
    addPost(post: any): Observable<any> {
      console.log('PostService addPost called with:', post);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(`${this.apiUrl}/create`, post, { headers });
    }
   
    updatePost(id: string, updatedPost: any) {
      return this.http.put(`${this.apiUrl}/update/${id}`, updatedPost);
    }

    deletePost(id: number): Observable<any> {
      const url = `${this.apiUrl}/delete/${id}`;
      return this.http.delete<any>(url);
    }
    getPostById(id: string): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<any>(url); 
    }
  }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/posts'; // URL to web api
  constructor(private http: HttpClient) { }

  // GET posts from the server
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getPost(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
  // POST: add a new post to the server
  addPost(post: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, post, { headers });
  }
  // PUT: update an existing post on the server
  updatePost(id: string, updatedPost: any) {
    return this.http.put(`${this.apiUrl}/${id}`, updatedPost);
  }
  
  // DELETE: delete a post from the server
  deletePost(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
   getPostById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url); 
   }
}

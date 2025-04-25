import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PostService } from '../../services/posts/post.service'; 
import { AuthService } from '../../services/auth/auth.service'; 
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(
    private postService: PostService,
    public authService: AuthService,
    public userService: UserService, 
    private router: Router 
  ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    } else {
      this.getPosts();
    }
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts); 
      this.posts.forEach(post => {
        this.userService.getUserById(post.user_Id.toString()).subscribe(user => {
          post.username = user ? user.username : 'Unknown User'; 
          console.log(post.username);
        });
      });
    });
  }

  deletePost(id: number): void {
    const postToDelete = this.posts.find(post => post.id === id);

    // Ensure the logged-in user is the owner of the post before deleting
    const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Logged in user:', loggedInUser);
    console.log('Post to delete:', postToDelete);
    if (postToDelete && loggedInUser.id === postToDelete.user_id) {
      this.postService.deletePost(id).subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id);
      });
    } else {
      alert('You cannot delete this post.');
    }
  }
}

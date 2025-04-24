import { Component } from '@angular/core';
import { PostService } from '../../services/posts/post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class UpdatePostsComponent {
  postId: string = '';
  title: string = '';
  content: string = '';
  postUserId: string = '';

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      this.getPostById();
    });
  }

  getPostById() {
    this.postService.getPostById(this.postId).subscribe((post) => {
      this.title = post.title;
      this.content = post.content;
      this.postUserId = post.user_id; 
    });
  }
  canUpdatePost(): boolean {
    const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Logged in user:', loggedInUser);
    console.log('Post user ID:', this.postUserId);
    return loggedInUser && loggedInUser.id === this.postUserId;
  }

  updatePost() {
    console.log('Update post called');
    if (this.canUpdatePost()) {
      const updatedPost = {
        title: this.title,
        content: this.content,
      };
      this.postService.updatePost(this.postId, updatedPost).subscribe({
        next: () => {
          alert('Post updated successfully!');
          this.router.navigate(['/posts']);
        },
        error: (err) => {
          console.error('Error updating post:', err);
          alert('Failed to update the post. Please try again.');
        },
      });
    } else {
      console.log('User is not authorized to update this post');
      alert('You can only update your own posts.');
      this.router.navigate(['/posts']); 
    }
  }
  cancelUpdate() {
    this.router.navigate(['/posts']);
  }
}

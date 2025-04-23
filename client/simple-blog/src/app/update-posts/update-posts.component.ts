import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class UpdatePostsComponent {
  postId: string = '';
  title: string = '';
  content: string = '';

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      this.getPostById();
    });
  }

  // Get post details by ID
  getPostById() {
    this.postService.getPostById(this.postId).subscribe((post) => {
      this.title = post.title;
      this.content = post.content;
    });
  }
  
  // Update the post
  updatePost() {
    const updatedPost = {
      title: this.title,
      content: this.content,
    };
    this.postService.updatePost(this.postId, updatedPost).subscribe({
      next: () => {
      alert('Post updated successfully!');
      },
      error: (err) => {
      console.error('Error updating post:', err);
      alert('Failed to update the post. Please try again.');
      },
    });
  }
  
}

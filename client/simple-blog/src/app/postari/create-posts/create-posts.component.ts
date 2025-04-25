import { Component } from '@angular/core';
import { PostService } from '../../services/posts/post.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-create-posts',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']  
})
export class CreatePostsComponent {
  title: string = '';
  content: string = '';

  constructor(private postService: PostService,private router: Router) {}

  createPost() {
    const user = localStorage.getItem('user');
    const userId= user ? JSON.parse(user).id : null;
    const newPost = {
      title: this.title,
      content: this.content,
      user_id: userId
    };
    this.postService.addPost(newPost).subscribe(() => {
      alert('Post created successfully!');
      this.router.navigate(['']);
    }, error => {
      console.error('Error creating post:', error);
      alert('An error occurred while creating the post.');
    });
  }
  
}

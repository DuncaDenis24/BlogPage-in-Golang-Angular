import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-create-posts',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-posts.component.html',
  styleUrl: './create-posts.component.css'
})
export class CreatePostsComponent {
  title: string = '';
  content: string = '';

  constructor(private postService: PostService) {}

  createPost() {
    const newPost = {
      title: this.title,
      content: this.content,
    };
    this.postService.addPost(newPost).subscribe(() => {
      // Add the new post to the list (or you can reload the posts)
      alert('Post created successfully!');
    });
  }
}

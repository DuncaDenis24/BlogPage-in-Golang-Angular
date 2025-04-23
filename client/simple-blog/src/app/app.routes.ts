import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CreatePostsComponent } from './create-posts/create-posts.component';
import { UpdatePostsComponent } from './update-posts/update-posts.component';

export const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'create', component: CreatePostsComponent },
  { path: 'update/:id', component: UpdatePostsComponent }
];
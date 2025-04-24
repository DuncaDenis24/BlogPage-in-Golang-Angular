import { Routes } from '@angular/router';
import { PostsComponent } from './postari/posts/posts.component';
import { CreatePostsComponent } from './postari/create-posts/create-posts.component';
import { UpdatePostsComponent } from './postari/update-posts/update-posts.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';

export const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'create', component: CreatePostsComponent },
  { path: 'update/:id', component: UpdatePostsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserProfileComponent}
  
];

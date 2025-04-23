import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CreatePostsComponent } from './create-posts/create-posts.component';
import { UpdatePostsComponent } from './update-posts/update-posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'create', component: CreatePostsComponent },
  { path: 'update/:id', component: UpdatePostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

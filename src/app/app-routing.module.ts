import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './comp/user-detail/user-detail.component';
import { UserListComponent } from './comp/user-list/user-list.component';
import { PostDetailComponent } from './comp/post-detail/post-detail.component';
import { PostListComponent } from './comp/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
